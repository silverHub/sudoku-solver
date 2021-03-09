# CRA-TailwindCSS Starter 😎

 [CRA](https://github.com/facebook/create-react-app) based application skeleton with TailwindCSS preconfigured with the help of croco.

Versions
- react-scripts v4.0.3
- TailwindCSS v2.0.3 (compat)

**Tested with Win10.**

## Features 🎁
- Deployment to Github Pages is configured with Github Actions
- Relative asset urls configured  (works with with arbitrary domain)
- TailwindCSS is purged in prod build

## Config 🔧
To use the deployment workflow you should configure and access token as a secret for you GitHub repo. See details and additional config [here](https://github.com/JamesIves/github-pages-deploy-action).

## Usage 🚀

First time, install dependencies with:

```sh
npm install
```

Start development server with hot module reloading:

```sh
npm start  // [localhost:3000](localhost:3000)
```

Create a production build:

```sh
npm run build   // assets will be generated in ./build folder
```

Launch the test runner in the interactive watch mode:

```sh
npm test
```

Get rid of CRA:
```sh
npm run eject
```
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

## Credits
MIT license
Made with 💗




