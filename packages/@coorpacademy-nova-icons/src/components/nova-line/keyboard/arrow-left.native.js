import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M22 11H6.414l2.293-2.293-1.414-1.414L2.586 12l4.707 4.707 1.414-1.414L6.414 13H22z"
    />
  </Svg>
);

export default SvgComponent;
