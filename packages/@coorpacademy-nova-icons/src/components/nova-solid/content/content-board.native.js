import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20 4.001h-2V2h-2v5h-2V4H9V2H7v5H5V4H4c-1.103 0-2 .898-2 2v14c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2V6a2.001 2.001 0 0 0-2-1.999zM19 18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8z"
    />
  </Svg>
);

export default SvgComponent;
