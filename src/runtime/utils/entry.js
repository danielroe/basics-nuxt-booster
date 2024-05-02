import { hasSufficientDownloadPerformance } from './performance';

export const triggerRunCallback = sufficient =>
  window.dispatchEvent(
    new CustomEvent('nuxt-booster:run', { detail: { sufficient } })
  );

export const observeBoosterButton = (selector, callback) => {
  Array.from(document.querySelectorAll(selector)).forEach(el => {
    el.addEventListener('click', callback, {
      capture: true,
      once: true,
      passive: true
    });
  });
};

export const updateBoosterLayerMessage = (layerEl, id) => {
  const el = window.document.getElementById(id);
  if (!el) {
    throw new Error("Can't update booster-layer, message " + id + ' missing.');
  } else {
    el.style.display = 'block';
    layerEl.className += ' nuxt-booster-layer-visible';
  }
};

export const setupBoosterLayer = (layerEl, supportedBrowser) => {
  if (!supportedBrowser) {
    updateBoosterLayerMessage('nuxt-booster-message-unsupported-browser');
  }
  if (!hasSufficientDownloadPerformance()) {
    updateBoosterLayerMessage(
      layerEl,
      'nuxt-booster-message-reduced-bandwidth'
    );
  }
};

export const initReducedView = () => {
  document.documentElement.classList.add('nuxt-booster-reduced-view');

  // activate fonts
  window.document.querySelectorAll('[data-font]').forEach(node => {
    node.classList.add('font-active');
  });

  // transform noscript>picture to picture
  Array.from(
    document.querySelectorAll('noscript.nuxt-booster-picture-noscript')
  ).forEach(el => {
    const tmp = document.createElement('div');
    tmp.innerHTML = el.innerHTML;
    el.parentNode.replaceChild(tmp.children[0], el);
    tmp.remove();
  });
};

export const hasBatteryPerformanceIssue = async videoBlob => {
  try {
    if (await isBatteryLow()) {
      throw new Error('Battery is low.');
    }
  } catch (error) {
    if (error.message === 'Battery is low.') {
      throw error;
    }
    await canVideoPlay(videoBlob);
  }
};

/**
 * Checks if battery still has enough energy.
 * This check is for Chrome and all other browsers that support this setting.
 *
 * Condition is: The device is not charging and Battery is below <= 20%.
 * @see https://blog.google/products/chrome/new-chrome-features-to-save-battery-and-make-browsing-smoother/
 * @see https://developer.chrome.com/blog/memory-and-energy-saver-mode/
 **/
const isBatteryLow = async () => {
  const MIN_BATTERY_LEVEL = 0.2;
  const battery = await window.navigator.getBattery();
  return !battery.charging && battery.level <= MIN_BATTERY_LEVEL;
};

/**
 * Checking whether a video can be played.
 * This check is for IOS and checks if the power saving mode is enabled.
 *
 * In this case no video will be played automatically and play throws an error.
 */
export const canVideoPlay = blob => {
  const video = document.createElement('video');
  video.muted = true;
  video.playsinline = true;
  video.src = URL.createObjectURL(blob);
  return video.play();
};
