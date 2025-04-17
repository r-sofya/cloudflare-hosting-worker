# 🌐 Deploy Your Custom Cloudflare Worker

This template allows you to deploy a Cloudflare Worker that imports shared logic from a hosted module.

## 🚀 Quick Start

1. Click "Use this template" to create your own repository.

2. Go to [Cloudflare Workers](https://dash.cloudflare.com/) and create a new Worker.

3. Connect your GitHub repository to the Worker.

4. In the **Settings → Variables** tab of your Worker, set the following environment variables:

   - `TARGET_URL`: Your original site URL (e.g., `https://truly-custom.webflow.io`)
   - `CANONICAL_DOMAIN`: Your live domain (e.g., `https://www.example.com`)
   - `PUBLISH_PASSWORD`: Your publishing password

5. In the **Settings → KV Bindings** tab, add a KV namespace with the binding name `CACHE_VERSION_PROJECT1`.

That's it! Your Worker is now deployed and ready to use.
