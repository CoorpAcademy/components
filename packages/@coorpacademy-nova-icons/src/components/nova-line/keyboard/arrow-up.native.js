import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16.707 7.293L12 2.586 7.293 7.293l1.414 1.414L11 6.414V22h2V6.414l2.293 2.293z"
    />
  </Svg>
);

export default SvgComponent;
