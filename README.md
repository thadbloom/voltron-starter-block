# ⚡️ Voltron Starter Block ⚡️

Experimental [WordPress](https://wordpress.org) starter [block](https://developer.wordpress.org/block-editor/) scaffolded with [Create Block](https://www.npmjs.com/package/@wordpress/create-block) tool.

---

## Install
Install local dependencies. Tested with Node v18.1.0
```
npm install
```
## Develop
Start local wp instance using [wp-env](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/) *(requires [Docker](https://www.docker.com))*
```
npm run wp-env start
```
Runs create block build process
```
npm start
```
## Deploy
Creates production build
```
npm build
```
