# ⚡️ Voltron Starter Block ⚡ #
Experimental [WordPress](https://wordpress.org) starter [block](https://developer.wordpress.org/block-editor/) scaffolded with [Create Block](https://www.npmjs.com/package/@wordpress/create-block) tool. Includes [wp-env](https://www.npmjs.com/package/@wordpress/env) for local development.

---

## Install ✨
Install local dependencies. *Tested with Node v18.1.0.*
```
npm install
```
## Develop 🔮
### Local WP environment
Start local wp instance using [wp-env](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/) *(requires [Docker](https://www.docker.com))*
By default wp-env uses port 8888, the local environment will be available at [localhost:8888](http://localhost:8888)
```
wp-env start
```
Stop local wp instance
```
wp-env stop
```
### Development build process 
```
npm start
```
## Deploy 💎
Create production build
```
npm build
```