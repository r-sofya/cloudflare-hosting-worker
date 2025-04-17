import { createTemplateWorker } from 'https://raw.githubusercontent.com/r-sofya/Libraries/refs/heads/main/hosting-script.mjs';

export default {
  async fetch(request, env, ctx) {
    const CACHE_VERSION_NAME = "Truly Custom Cache";

    const config = {
      TARGET_URL: env.TARGET_URL || "https://truly-custom.webflow.io",
      CANONICAL_DOMAIN: env.CANONICAL_DOMAIN || "https://www.example.com",
      CACHE_VERSION: env[CACHE_VERSION_NAME]
    };

    return createTemplateWorker(request, env, ctx, config);
  }
}
