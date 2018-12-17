import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M21 4V2H11v2h3.461l-7.11 16H3v2h10v-2H9.539l7.11-16z"
    />
  </Svg>
);

export default SvgComponent;
