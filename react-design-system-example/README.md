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

## Getting Started

First install node >=16 and npm >=8. Recommended versions `node v19` and `npm v9`.

### Create a `.npmrc` file and add a token

To install the [@iqss/dataverse-client-javascript](https://github.com/IQSS/dataverse-client-javascript/pkgs/npm/dataverse-client-javascript)
from the GitHub registry, necessary for connecting with the Dataverse API, follow these steps to create an `.npmrc` file in
the root of your project using your GitHub token.

1. **Copy `.npmrc.example`**

   Duplicate the `.npmrc.example` file in your project and save it as `.npmrc`.

2. **Replace the Token**

   Open the newly created `.npmrc` file and replace `YOUR_GITHUB_TOKEN` with your actual GitHub token.

   ```plaintext
   legacy-peer-deps=true

    //npm.pkg.github.com/:_authToken=<YOUR_GITHUB_AUTH_TOKEN>
    @iqss:registry=https://npm.pkg.github.com/
   ```

#### How to Get a GitHub Token

If you don't have a GitHub token yet, follow these steps:

1. Go to your GitHub account settings.

2. Navigate to "Developer settings" -> "Personal access tokens."

3. Click "Personal access tokens" -> "Tokens (classic)" -> "Generate new token (classic)".

4. Give the token a name and select the "read:packages" scope.

5. Copy the generated token.

6. Replace `YOUR_GITHUB_AUTH_TOKEN` in the `.npmrc` file with the copied token.

Now, you should be able to install the Dataverse JavaScript client using npm.

### `npm install`

Run this command to install the dependencies. You may see a message about vulnerabilities after running this command. \
Please check this announcement from Create React App repository https://github.com/facebook/create-react-app/issues/11174 .
These vulnerabilities won't be in the production build since they come from libraries only used during the development.


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

## Run the example application

To run the application, you first must obtain a Dataverse API token. To do so, follow these steps:
1. Setup the local Dataverse instance as described in the previous section.
2. Go to your Dataverse at  instance at [http://localhost:8000](http://localhost:8000)  and log in. (Username: `dataverseAdmin`, Password: `admin1`)
2. From the top right corner, click on your username and select "API Token" from the dropdown menu.
3. Click on "Create API Token" and copy the token.
4. Edit the .env file in the root of the project, replacing `DATAVERSE_API_TOKEN` with the copied token.
5. Go to  [http://localhost:8000/spa](http://localhost:8000/spa) to access the SPA frontend.
6. The 'Populate' button should populate dataset table with the data from the local Dataverse instance.