import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M13 6.414l2.293 2.293 1.414-1.414L12 2.586 7.293 7.293l1.414 1.414L11 6.414V11H8v2h3v1H8v2h3v6h2v-6h3v-2h-3v-1h3v-2h-3z"
    />
  </Svg>
);

export default SvgComponent;
