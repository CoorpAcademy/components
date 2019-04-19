[![Build Status](https://travis-ci.org/CoorpAcademy/components.svg?branch=master)](https://travis-ci.org/CoorpAcademy/components)
[![Coverage Status](https://codecov.io/gh/CoorpAcademy/components/branch/master/graph/badge.svg)](https://codecov.io/gh/CoorpAcademy/components)
[![GitPitch](https://gitpitch.com/assets/badge.svg)](https://gitpitch.com/coorpacademy/tekacademy/components?grs=github&t=night)
[![Greenkeeper badge](https://badges.greenkeeper.io/CoorpAcademy/components.svg)](https://greenkeeper.io/)

# Static demos

- [Story book](http://coorpacademy.github.io/components/components)
- [AppPlayer](http://coorpacademy.github.io/components/app-player)

# packages

- [Components](./packages/@coorpacademy-components/README.md)

# How to

### Start

```
yarn
yarn bootstrap
```

### Publish: 

[See detailed doc](./doc/publish.md)

### Add a new dependency:

Go to the target package, and add the dependency using

```
yarn add myPackage

```

### Unit Tests with eslint and ava:

```
npm test
```

### Developing apps using HMR and components

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

#### flow

If you have any problem during an _npm run build_ command related to flow:

- Kill flow processes

```
pkill -f flow
```

- Check if the problem is related to a new installed dependency. In this case, exclude the dependency on the .flowconfig file.
