# SvelteKit vs Next.js

POC implementations of plugin page for
[napari hub](https://github.com/chanzuckerberg/napari-hub)
comparing SvelteKit to Next.js. A mock server is included in
[server/](server/) to provide API access to some data that corresponds to the
plugin page designs.

## Deployment

The applications are deployed on [Vercel](https://vercel.com) using the
[free hosting plan](https://vercel.com/pricing):

- [Mock Server](https://napari-hub-server.vercel.app/api/data)
- [Next.js](https://napari-hub-react.vercel.app)
- [SvelteKit](https://napari-hub-svelte.vercel.app/)

```sh
# Deploy mock server
cd server
vercel --prod
cd ..

# The Next.js and SvelteKit apps use the SERVER_URL environment variable to
# know what URL to request data from.
# For example, the URL we use in production is:
# https://napari-hub-server.vercel.app
export SERVER_URL='mock server url'

cd react
vercel -e SERVER_URL=$SERVER_URL --prod
cd ..

cd svelte
# We have to use the `--build-env` flag instead of the `--env` flag because
# SvelteKit replaces the environment variable at build time.
vercel -b SERVER_URL=$SERVER_URL --prod
cd ..
```
