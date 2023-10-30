import { promises as fsPromises } from 'fs';
import { basename, dirname, join, resolve } from 'path';
import { parseDocument } from 'htmlparser2';
import { load } from 'cheerio';
import { render } from 'dom-serializer';
import { logger } from '../../utils.mjs';

export default (nuxt, disableNuxtCritters = true) =>
  nitro => {
    nitro.hooks.hook('prerender:generate', async route => {
      if (!route.fileName?.endsWith('.html') || !route.contents) {
        return;
      }

      const document = parseDocument(route.contents);
      const $ = load(document);

      $('[rel="modulepreload"][as="script"]').remove();
      $('[rel="prefetch"][as="script"]').remove();

      $('[rel="preload"][as="style"]').remove();
      $('[rel="prefetch"][as="style"]').remove();

      // embed css files
      try {
        const css = await Promise.all(
          Array.from($('link[rel="stylesheet"]'))
            .map(el => $(el))
            .filter($el => !isURL($el.attr('href')))
            .map(async $el => {
              const dir = dirname($el.attr('href'));

              // https://nuxt.com/docs/guide/directory-structure/output
              const publicDir = join(
                nuxt.options.rootDir,
                '.output/public',
                nuxt.options.vite.build.assetsDir
              );
              const filepath = join(publicDir, basename($el.attr('href')));
              const fileContent = await fsPromises.readFile(filepath, 'utf-8');

              let urls = getUrlValues(fileContent);
              urls = prepareUrls(urls, dir);

              if (disableNuxtCritters) {
                const css = urls.reduce(
                  (result, [a, b]) => result.replace(a, b),
                  fileContent
                );

                $el.remove();
                logger.info(
                  `Embed CSS File \`${basename($el.attr('href'))}\`; Route: \`${
                    route.route
                  }\``
                );
                return css;
              } else {
                const matches = fileContent.match(
                  /\/\*! speedkit-font-faces start \*\/(.*)\/\*! speedkit-font-faces end \*\//
                );
                if (matches) {
                  logger.info(
                    `Embed Font-Faces CSS \`${basename(
                      $el.attr('href')
                    )}\`; Route: \`${route.route}\``
                  );
                  return matches[1].replace(/url\(.\//g, `url(${dir}/`);
                }
              }
            })
        );
        if (css.length) {
          $('head').append(`<style>${css.join('')}</style>`);
        }
      } catch (error) {
        logger.error("can't embed css file.", error);
      }

      route.contents = render(document);
    });
  };

function getUrlValues(css) {
  return css.match(/url\(([^)]+)\)/g);
}

function prepareUrls(urls, relativeDir) {
  return urls
    .map(url => {
      const value = url
        .trim()
        .replace(/^url\((.*)\)$/, '$1')
        .trim();
      if (isURL(value) || isDataURI(value)) {
        return false;
      }
      return [url, `url(${resolve(relativeDir, value)})`];
    })
    .filter(Boolean);
}

function isURL(value) {
  return value.startsWith('http') || value.startsWith('//');
}
function isDataURI(value) {
  return value.startsWith('data:');
}
