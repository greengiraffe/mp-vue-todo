# Vue.js ToDo-App

A simple ToDo-App for the International Media and Computing Master Course "Media Programming" at University of Applied Sciences Berlin (HTW Berlin). See http://home.htw-berlin.de/~kleinen/classes/ss2018/media-programming-rails/assignments/.

The result is currently live on https://greengiraffe.github.io/mp-vue-todo/ but may be taken down at any time. ;-)

## Installation

1. Install node: https://nodejs.org/en/
2. Install yarn: `npm install -g yarn`
3. Install dependencies: `yarn install`

### Development

- Run `yarn dev` to start a local development server that supports hot-reloading on `localhost:9000`.

### Building for Production

Running `yarn build` generates the output to the `dist` folder. _Optional:_ Use a server to serve the `dist` directory.

### More commands

- `yarn lint` to lint all .vue and .js files in the `src` directory
- `yarn deploy` to deploy the `dist` folder to GitHub Pages
