This is an example to help you understand the tutorial purpose.

# Installation

First install your dependencies by running either `yarn` or `npm install`.

If you have `docker-compose` installed then follow this steps:

- `cd path/to/server`
- `docker-compose up -d --build`
- `./node_modules/.bin/sequelize db:migrate` or `npx sequelize db:migrate`
- `./node_modules/.bin/sequelize db:seed:all` or `npx sequelize db:seed:all`

If you don't have docker installed in your machine, please refer to (this article)[https://www.pgadmin.org/download/] and install your local postgresql client.

Make sure that you create a user with the following credentials:

- username: `manager`
- password: `demo`

Otherwise you will have to change your configuration inside `/server/config/config.json`

```json
{
  "development": {
    "username": "Your user_name goes here",
    "password": "Your password goes here",
    ...
  }
}
```

Now that you have everything up and running, all left is to run the graphql server by running this command line `node server.js`

# Questions

If you have any questions please open an issue and write your question, you will get your answer asap :wink: