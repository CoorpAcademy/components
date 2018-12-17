import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M18 3H6a2 2 0 0 0-2 2v17h16V5a2 2 0 0 0-2-2zm-7 7a2 2 0 1 1 .001-4.001A2 2 0 0 1 11 10zm4-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
    />
  </Svg>
);

export default SvgComponent;
