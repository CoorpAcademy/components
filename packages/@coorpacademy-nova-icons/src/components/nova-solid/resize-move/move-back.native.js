import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      fill="currentColor"
      d="M7.707 16.293L5.414 14H19a2 2 0 0 0 2-2V7h-2v5H5.414l2.293-2.293-1.414-1.414L1.586 13l4.707 4.707 1.414-1.414z"
    />
  </Svg>
);

export default SvgComponent;
