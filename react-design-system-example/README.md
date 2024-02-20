# React Example with Design System
### React + TypeScript + Vite

This project is a minimal example of a React app using the [Dataverse Design System](https://www.npmjs.com/package/@iqss/dataverse-design-system) and [js-dataverse](https://github.com/IQSS/dataverse-client-javascript) library. It uses [Vite](https://vitejs.dev/) for the build tool. 

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!--TODO: update the following sections
## Expanding the ESLint configuration


If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
-->

## Local development environment

A containerized environment, oriented to local development, is available to be run from the repository.

This environment contains a dockerized instance of the Dataverse backend with its dependent services (database, mailserver, etc), as well as an npm development server running the SPA frontend (With code autoupdating).

This environment is intended for locally testing any functionality that requires access to the Dataverse API from the SPA frontend.

There is an Nginx reverse proxy container on top of the frontend and backend containers to avoid CORS issues while testing the application.

### Run the environment

Inside the `dev-env` folder, run the following command:

```
./run-env.sh <dataverse_image_tag>
```

As the script argument, add the name of the Dataverse image tag you want to deploy.

Note that the image tag in the docker registry must to be pre pushed, otherwise the script will fail.

If you are running the script for the first time, it may take a while, since `npm install` has to install all the dependencies. This can also happen if you added new dependencies to package.json.

Once the script has finished, you will be able to access Dataverse via:

- [http://localhost:8000/spa](http://localhost:8000/spa): SPA Frontend
- [http://localhost:8000](http://localhost:8000): Dataverse Backend and JSF Frontend

_Note: The Dataverse configbaker takes some time to start the application, so the application will not be accessible until the bootstrapping is complete._

If you want to add test data (collections and datasets) to the Dataverse instance, run the following command:

```
./add-env-data.sh
```

_Note: The above command uses the dataverse-sample-data repository whose scripts occasionally fail, so some of the test data may not be added_

### Remove the environment

To clean up your environment of any running environment containers, as well as any associated data volumes, run this script inside the `dev-env` folder:

```
./rm-env
```
