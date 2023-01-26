# @Coorpacademy/Components

This library provide sharable components for web applications, either :

- as CommonJS components
- as a minified library

[![Components diagram](./doc/components.png)](./doc/components.svg)

## Goal

- edit a component once, share it across all our platforms
- provide a documentation referencing every component with its
  - available states (disabled, selected)
  - skinable properties
- provide the smallest lib

## Development

### Seeing the components on Storybook

```sh
yarn
npm run start
# OR
npm run start:ie # for Internet Explorer
```

Then open `http://localhost:3004`.

### Analyse your component

The `props` is the contract your app should fill in order to use the component.
If the `props` are not properly set, it is not the role of you component to change them in order to render somehow.
The `propTypes` are the representation of this contract.

Keep this workflow in mind:

```sh
props -> propTypes -> fixtures -> component
```

Then your app will just have to read `propTypes` to know which `props` to provide to render a view.

### Adding a component

- choose your atomic folder depending your component: `template`, `organism`, `molecule`, `atom`
- add a folder having your component name: for example, for `button` you should have this tree:

```sh
atom
  └── button
        ├── index.js
        ├── style.css
        └── test
            └── fixtures
               └── default.js
               └── disabled.js
               └── hovered.js
```

- `index.js` contains the React code + jsx, and exports your component
- `style.css` contains the css module style for your component
- `test/fixtures/*.js` are files representing all the possible states for your component, thus export props accordingly

note that whenever you add new component or new fixtures you have to generate the storybook index:

```sh
npm run generate
```

which is also launched automatically whenever you run `npm start`

### Adding a locale

- You need to add your locale in en/global.json file
- Be sure to have `translate: Provider.childContextTypes.translate` in the contextTypes object of your component

example:

```
  ....

  const YourComponent = (props, context) => {
    const {translate} = context;

    return <p>{translate('your new locale')}</p>
  }

  YourComponent.contextTypes = {
    translate: Provider.childContextTypes.translate
};

  ...
```

### Using a Lottie Animation

To use a lottie animation, you need to use the LottieWrapper Atom.

Among the Lottie Atom's props, there are two *important* props: animationSrc & ie11ImageBackup,
that need an additional step, the ie11ImageBackup is needed as it's name implies because ie11 doesn't
support Lottie (more specifically Web Components due to the Shadow DOM).

First, you must upload to AWS S3 any new animation, in one of the static buckets (depending on the desired env), ex:
`https://static-staging.coorpacademy.com/animations/review/`.

This animation must be paired with a backup image (svg) that'll be used for the ie11 scenario.

Then, use the urls as props for animationSrc & ie11ImageBackup, ex:

```javascript
const props = {
    'aria-label': 'aria lottie',
    'data-name': 'default-lottie',
    className: undefined,
    animationSrc: 'https://static-staging.coorpacademy.com/animations/review/rank.json',
    loop: true,
    height: 200,
    width: 200,
    ie11ImageBackup:
      'https://static-staging.coorpacademy.com/animations/review/rank_icon_congrats.svg',
    // autoplay: true // autoplay is true by default
}
```

If you need to control the animation (play/pause/stop), then you must set autoplay to false &
add your desired state, among the available states: `play, pause, stop, loading`

```javascript
const props = {
    'aria-label': 'aria lottie',
    'data-name': 'default-lottie',
    className: undefined,
    animationSrc: 'https://static-staging.coorpacademy.com/animations/review/rank.json',
    loop: true,
    height: 200,
    width: 200,
    ie11ImageBackup:
      'https://static-staging.coorpacademy.com/animations/review/rank_icon_congrats.svg',
    autoplay: false,
    animationControl: 'loading' // play can be passed directly without using loading first
}
```

#### Additional information

The props include classNames && size control to handle additional styling.

## Locally use in an external project

Link your dependencies:

```sh
[@coorpacademy-components] > npm link
[your-app] > npm link @coorpacademy/components
```

Build modifications:

```sh
[@coorpacademy-components] > npm run build:es
```

## Use in mobile app

Run `npm run build:watch`
For more info see the [mobile documentation](https://github.com/CoorpAcademy/mobile/blob/master/docs/local-sync.md)

You may need to install these optional libs depending on which native components you use:

- `color`
- `react-native-modal`
- `react-native-render-html`
- `react-native-linear-gradient`
- `@coorpacademy/react-native-slider`
- `@react-native-community/blur`

## Troubleshooting

Error when trying to launch the storybook:

Try to delete your ```node_modules```, go to the project's root and launch: ```yarn```
