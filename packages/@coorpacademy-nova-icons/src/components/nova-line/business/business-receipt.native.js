import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20.707 7.293l-5-5A1 1 0 0 0 15 2H4a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a.997.997 0 0 0-.293-.707zM19 20H5V4h9.586L19 8.415V20z" />
      <Path d="M14 9h4v2h-4zM14 13h4v2h-4zM8 17h10v2H8zM9 16h2v-1.051c1.14-.232 2-1.243 2-2.449 0-1.378-1.121-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1H13V7h-2V6H9v1.051C7.86 7.283 7 8.293 7 9.5 7 10.878 8.121 12 9.5 12h1a.5.5 0 0 1 0 1H7v2h2v1z" />
    </G>
  </Svg>
);

export default SvgComponent;
