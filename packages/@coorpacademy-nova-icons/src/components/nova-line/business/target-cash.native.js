import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M24 11h-2.051c-.47-4.717-4.232-8.479-8.949-8.949V0h-2v2.051C6.283 2.521 2.521 6.283 2.051 11H0v2h2.051c.471 4.717 4.232 8.479 8.949 8.949V24h2v-2.051c4.717-.47 8.479-4.232 8.949-8.949H24v-2zm-11 8.932V19h-2v.932A8.01 8.01 0 0 1 4.069 13H5v-2h-.931A8.01 8.01 0 0 1 11 4.069V5h2v-.931A8.01 8.01 0 0 1 19.931 11H19v2h.931A8.01 8.01 0 0 1 13 19.932z" />
      <Path d="M13 7h-2v1.051c-1.14.232-2 1.242-2 2.449 0 1.378 1.121 2.5 2.5 2.5h1a.5.5 0 0 1 0 1H9v2h2v1h2v-1.051c1.14-.232 2-1.243 2-2.449 0-1.378-1.121-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1H15V8h-2V7z" />
    </G>
  </Svg>
);

export default SvgComponent;
