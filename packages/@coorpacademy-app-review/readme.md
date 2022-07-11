# App Review

- 📚 [Static Demo](http://coorpacademy.github.io/components/app-review)
- 🏹 Architecture illustrated with Excalidraw ([local](../../../documentation/documentation/review-mode/frontend-app-review.excalidraw) and [github](https://github.com/coorpacademy/documentation/blob/master/documentation/review-mode/frontend-app-review.excalidraw)).

This package is the `@app-review` section.

## start local sandbox

```sh
npm start
```

requirements:

- [mooc](https://github.com/CoorpAcademy/coorpacademy) installed and running to expose a local API.
- duplicated `.env.sample` to `.env` with a local token to access the mooc API.

## developing views locally

Be sure to build `es/` on `@coorpademy/components`

```sh
> cd ../@coorpademy-components
> npm run build:es
```

then start [the sandbox](#start-local-sandbox)

## generate /static

```sh
npm run static
```

(This script is used by lerna to publish the [static web app](http://coorpacademy.github.io/components/app-review))

## unit tests

```sh
npm run test:unit
```

or

```sh
npx ava --watch
```

## dependencies notes

`react` must also be the same version on this package and the rootApp
*(possible generic error Warning: Invalid hook call. [...] 3. You might have more than one copy of React in the same app)*

### tmp notes

export: <https://stackoverflow.com/a/70020984/959219>

css modules:

- <https://github.com/evanw/esbuild/issues/20>
- <https://github.com/indooorsman/esbuild-css-modules-plugin/issues/35>
- <https://github.com/princed/postcss-modules-values-replace>
- <https://github.com/CoorpAcademy/coorpacademy-lambda/blob/master/teams/postcss.config.js#L4>
