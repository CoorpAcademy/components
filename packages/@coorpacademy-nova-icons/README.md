# @Coorpacademy/nova-icons

Components bank (react and react-native) based on Nova SVG icons (through [Iconjar](https://geticonjar.com) files)

## Before all

- Download iconjar application for macos (https://geticonjar.com/) or free app nucleoapp (https://nucleoapp.com/)

## Adding an icon

- Open `IconJar` <https://geticonjar.com/>
- Import your icon's collection from the folder you need in `packages/@coorpacademy-nova-icons/third-party` or add a new one
- If you want any path's color to be injected (to be replaced by currentColor), give fill or stroke the color `#757575` ex (the last path is going to keep
`#4B4C4C` as its color) anything else will remain __as is__:
```
    <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 18.1 18" style="enable-background:new 0 0 18.1 18;" xml:space="preserve">
    <path stroke="#757575" d="M1,9h10.9"/>
    <path fill="#757575" d="M9,6.1L11.9,9L9,11.9"/>
    <path stroke="#4B4C4C" d="M1.7,5.7C3,2.9,5.8,1,9,1c4.4,0,8,3.6,8,8c0,4.4-3.6,8-8,8c-3.3,0-6.1-1.9-7.3-4.7"/>
    </svg>
```
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


