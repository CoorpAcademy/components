import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M11.998-.002c-4.963 0-9 4.038-9 9v14a1.001 1.001 0 0 0 1.707.708l3.293-3.294 3.293 3.294a1 1 0 0 0 1.414 0l3.293-3.294 3.293 3.294a1 1 0 0 0 1.707-.708v-14c0-4.963-4.037-9-9-9zm-2 13h-3v-4h2v2h1v2zm5 0h-3v-4h2v2h1v2z"
    />
  </Svg>
);

export default SvgComponent;
