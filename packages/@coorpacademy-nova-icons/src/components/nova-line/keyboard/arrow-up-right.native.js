import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M13 4v2h3.586L4.293 18.292l1.414 1.415L18 7.414V11h2V4z"
    />
  </Svg>
);

export default SvgComponent;
