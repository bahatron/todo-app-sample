# todo-app-sample

> A sample TODO notes app using Node and Vue in a monorepo fashion

## Running Locally

### Required Dependencies

-   node:12+
-   [tilt.dev:](https://tilt.dev/)
-   docker & docker-compose

```sh
# install dependencies
npm install

# run application
./run.js dev -c

# if you don't want to run it with tilt for watch and reload
# you can run the app with simply use docker-compose
docker-compose up --build
```

## See it Running on Heroku

## Resources:

-   [Heroku Monorepo Buildpack](https://github.com/lstoll/heroku-buildpack-monorepo)
-   [Article to deploy monorepos to Heroku and Github Actions](https://blog.softup.co/how-to-deploy-a-monorepo-to-multiple-heroku-apps-using-github-actions/)
-   [Postgres SSL fix for Heroku](https://stackoverflow.com/questions/25000183/node-js-postgresql-error-no-pg-hba-conf-entry-for-host)
-   [Vue app deployment on Heroku](https://cli.vuejs.org/guide/deployment.html#heroku)
