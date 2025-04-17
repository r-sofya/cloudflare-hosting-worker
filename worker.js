import { createTemplateWorker } from 'https://libraries-cmt.pages.dev/hosting-script.js';

export default {
  async fetch(request, env, ctx) {
    const CACHE_VERSION_NAME = "CACHE_VERSION_PROJECT1";

    const config = {
      TARGET_URL: env.TARGET_URL,
      CANONICAL_DOMAIN: env.CANONICAL_DOMAIN,
      CACHE_VERSION: env[CACHE_VERSION_NAME]
    };

    return createTemplateWorker(request, env, ctx, config);
  }
}
