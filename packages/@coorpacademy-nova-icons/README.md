# @Coorpacademy/nova-icons

Components bank (react and react-native) based on Nova SVG icons (through [Iconjar](https://geticonjar.com) files)

## Before all

- Download iconjar application for macos (https://geticonjar.com/) or free app nucleoapp (https://nucleoapp.com/)

## Adding an icon

- Import your icon's collection from the folder you need in `packages/@coorpacademy-nova-icons/third-party` or add a new one
- Drag and drop your SVG file into a collection
- Export the new updated iconjar collection (be careful to have the same name when you export, to erase the old one)
- Add the brand new svg icon's path into `icons.js` file that's in root project (if you're SVG has a color and you want to keep it, you can add the property: `replaceColors: false`)
- Generate the component using `yarn prepare`
- You have to commit the Meta file

## Usage

```jsx
import React from 'react';
import { NovaCompositionCoorpacademyCog } from '@coorpacademy/nova-icons';

const MyComponent = () => (
  <NovaCompositionCoorpacademyCog width={32} height={32} color="#123456" />
);

export default MyComponent;
```

**Note**: React-Native component will automatically be resolved as [Metro](https://github.com/facebook/metro) supports `.native.js` extension.

## Props

You can use the props supported by [svg](https://developer.mozilla.org/docs/Web/SVG/Attribute) and [react-native-svg](https://github.com/react-native-community/react-native-svg) `<SVG />` component with camel case format (ie: strokeColor).

## Contributing

Please, run `yarn test` before submitting a pull request.
