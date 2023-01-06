# ⚡️ Voltron Starter Block ⚡ #

Experimental [WordPress](https://wordpress.org) starter [block](https://developer.wordpress.org/block-editor/) scaffolded with [Create Block](https://www.npmjs.com/package/@wordpress/create-block) tool. Includes [wp-env](https://www.npmjs.com/package/@wordpress/env) for local development.

---

## Install ✨

If you want to use wp-env for local development, it must be installed globabally on your machine:

`npm -g i @wordpress/env`

Install local dependencies:

`npm install`

## Develop 🔮

#### Local WP environment

Start local wp instance using [wp-env](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/) *(requires [Docker](https://www.docker.com))*
By default wp-env uses port 8888, the local environment will be available at [localhost:8888](http://localhost:8888)

`wp-env start`

Stop local wp instance

`wp-env stop`

#### Development build process

`npm start`

## Deploy 💎

Create production build

`npm build`
