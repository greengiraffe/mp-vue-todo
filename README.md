# Vue.js ToDo

## Installation

1. Install node: https://nodejs.org/en/
2. Install yarn: `npm install -g yarn`
3. Install dependencies: `yarn install`

### Building & Running

1. Running `yarn build` generates the output to the `dist` folder
2. Use a server to serve the root directory (that includes the `index.html`)

### More commands

- `yarn dev` to run webpack in watch mode
- `yarn lint` to lint all .vue and .js files in the `src` directory

## Devlog

First steps, adding the most important dependencies:

```
npm install -g yarn

yarn add vue vue-router
yarn add --dev vuex webpack webpack-cli
```