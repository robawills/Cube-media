# Cube-media

Fulmer Developments is a Craft CMS 3.0 powered website.

## Server Requirements
- Node.js
- Composer
- PHP 7.0+
- MySQL 5.5+

See the [full requirements for Craft CMS 3.0](https://docs.craftcms.com/v3/requirements.html#checking-your-server).

## Setup
- We use [composer](https://getcomposer.org/) to include Craft CMS
- We use [npm](https://www.npmjs.com/) to build Front-End assets such as CSS, images and JavaScript
- In our Craft CMS config we are using either server environment variables (for production), or a `.env` file to supply these variables. This is a more secure method of storing sensitive data (ie. database credentials) as they are never source controlled by git.
  - See `.env.example` for an example of the environment variables. For reference, these are the variables being set (mostly self explanatory):
    - `DB_DRIVER`
    - `DB_SERVER`
    - `DB_USER`
    - `DB_PASSWORD`
    - `DB_DATABASE`
    - `DB_SCHEMA`
    - `DB_TABLE_PREFIX`
    - `DB_PORT`
    - `SECURITY_KEY`
    - `CRAFT_ENVIRONMENT`
    - `CRAFT_SITE_URL`
- When deploying the following commands need to be ran on the server. This will install any composer dependencies, npm dependencies, and build front-end assets with npm:
  - `composer install --no-interaction --prefer-dist --optimize-autoloader`
  - `npm i`
  - `npm run build`

  