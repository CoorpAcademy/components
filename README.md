# Coorpacademy Components

[![Build Status](https://travis-ci.org/CoorpAcademy/components.svg?branch=master)](https://travis-ci.org/CoorpAcademy/components)
[![Coverage Status](https://codecov.io/gh/CoorpAcademy/components/branch/master/graph/badge.svg)](https://codecov.io/gh/CoorpAcademy/components)
[![GitPitch](https://gitpitch.com/assets/badge.svg)](https://gitpitch.com/coorpacademy/tekacademy/components?grs=github&t=night)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

## Static demos

If you want to see what theses packages have to look there: :wink:

- :open_book: [Story book](http://coorpacademy.github.io/components/components)
- :joystick: [AppPlayer](http://coorpacademy.github.io/components/app-player)
- 📚 [AppReview](http://coorpacademy.github.io/components/app-review)

## Packages

- [Components](./packages/@coorpacademy-components/README.md)
- [and many mores](./packages)

## How to

### Start:

```bash
yarn
```

### Publish:

[See detailed doc](./doc/publish.md)

### Add a new dependency:

Go to the target package, and add the dependency using

```bash
yarn add myPackage
```

You'll need `-W` (aka `--ignore-workspace-root-check`) to install to package root.

### Unit Tests with eslint and ava:
You can either invoke it at the monorepo top level, or in specific packages
```bash
npm test
# or if you just run lint
npm run lint
# or tests
npm run test:unit
```

### Developing apps using HMR and components
For recap, HMR stands for [Hot Module replacement](https://webpack.js.org/concepts/hot-module-replacement/)
```
[@coorpacademy-components]> npm run build:es -- --watch
[@coorpacademy-app-player]> npm start
```

### Troubleshooting

#### dependencies

Lerna is used to plug and publish all the packages in this repo.
You may have to reset all `node_modules` : use `lerna clean` before performing `npm i` again.

#### publishing

Be sure your packages are public, or you'll end up with errors on CI like.

```error
Extracting tar content of undefined failed, the file appears to be corrupt: "Unexpected end of data"
```

set your public access:

```sh
> npm access public @coorpacademy/progression-engine
```

For others publishing issues [see dedicated section in Publish doc](./doc/publish.md#troobleshooting)

#### flow

If you have any problem during an `npm run build` command related to flow:
`
- Kill flow processes
    ```bash
    pkill -f flow
    ```
- Check if the problem is related to a new installed dependency. In this case, exclude the dependency on the .flowconfig file.
