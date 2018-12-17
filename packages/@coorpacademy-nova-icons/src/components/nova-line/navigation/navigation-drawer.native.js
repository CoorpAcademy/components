import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M4 5h16v2H4zM4 8.999h16v2H4zM4 13h16v2H4zM4 17h16v2H4z"
    />
  </Svg>
);

export default SvgComponent;
