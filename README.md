[![npm](https://img.shields.io/npm/v/npm.svg?maxAge=2592000)]()
[![npm version](https://badge.fury.io/js/express.svg)](https://badge.fury.io/js/express)
[![devDependency Status](https://david-dm.org/dwyl/esta/dev-status.svg)](https://david-dm.org/dwyl/esta#info=devDependencies)

# Base
Base is a little contact app project with authentication.

<h3>Prerequisites</h3>
<p>In order to run the app, you will need to first install Mongoose. You can get that here <a href='http://mongoosejs.com/'>Mongoose</a>

>Quick note: You'll notice this project uses Yarn for dependency management. To add Yarn, head over to https://yarnpkg.com/en/ to install it. Otherwise, instead of Yarn, just use npm. Ex: `yarn install` would be the same as `npm install`.

<h3>Instructions</h3>
- Clone the repo <br />
- Install packages (yarn install)

<h3>Start up the app (Done in 3 different console tabs)</h3>
- mongoose (start by running mongod) <br />
- yarn run bundle <br />
- yarn start

<h3>Signup</h3>
- Once started, go ahead and signup for an account. Once signed up go ahead and login, click the contact list link, and add yourself some contacts items.

<h3>View frontend</h3>
<a href='http://localhost:3000/'>http://localhost:3000/</a>

<br />
<br />
<br />
<br />

<h3>Navigating around in Mongo</h3>
- Show all databases: show databases <br />
- Show current database: db <br />
- Select a database: use db_name -> ex. use users <br />
- Read items in collection: db.db_name.find() -> ex. db.users.find() <br />
