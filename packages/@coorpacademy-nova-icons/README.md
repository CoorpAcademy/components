# @Coorpacademy/nova-icons

Components bank (react and react-native) based on Nova SVG icons (through [Iconjar](https://geticonjar.com) files)

## Adding an icon

- Open the Iconjar collection in the `third-party` folder or add a new one
- Drag and drop your SVG file into the collection (be careful of having a SVG without any custom color)
- Add the path into the `icons.js` file at root
- Generate the component using `yarn prepare`

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
