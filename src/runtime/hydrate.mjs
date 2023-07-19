import { hydrateWhenVisible } from 'vue3-lazy-hydration';
import { defineAsyncComponent } from 'vue';
import { useRuntimeConfig } from '#imports';

const isDev = false; // process.env.NODE_ENV === 'development';

export default component => {
  if (isDev || process.server) {
    if (typeof component === 'function') {
      component = defineAsyncComponent(component);
    }
    return component;
  }

  const runtimeConfig = useRuntimeConfig();

  return hydrateWhenVisible(component, {
    observerOptions: {
      rootMargin: runtimeConfig.public.speedkit.lazyOffsetComponent || '0%'
    }
  });
};
