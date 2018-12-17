import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      d="M7.707 14.292l-2.293-2.293H19v5h2v-5a2 2 0 0 0-2-2H5.414l2.293-2.293-1.414-1.414-4.707 4.707 4.707 4.707 1.414-1.414z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
