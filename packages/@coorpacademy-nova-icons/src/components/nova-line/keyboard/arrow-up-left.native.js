import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M19.707 18.293L7.414 6H11V4H4v7h2V7.414l12.293 12.293z"
    />
  </Svg>
);

export default SvgComponent;
