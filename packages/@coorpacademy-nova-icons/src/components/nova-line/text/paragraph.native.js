import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M21 2H9C5.691 2 3 4.691 3 8s2.691 6 6 6h2v8h2V4h3v18h2V4h3V2zM11 12H9c-2.206 0-4-1.794-4-4s1.794-4 4-4h2v8z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
