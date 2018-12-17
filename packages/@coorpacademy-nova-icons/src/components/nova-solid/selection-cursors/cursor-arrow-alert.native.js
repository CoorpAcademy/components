import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      fill="currentColor"
      d="M3 3.001l3 9.001 1-5 5-1zM15 8.002a7 7 0 1 0 .001 14.001A7 7 0 0 0 15 8.002zm-1.001 3h2v5h-2v-5zM15 20.001a1 1 0 1 1-.002-1.998A1 1 0 0 1 15 20z"
    />
  </Svg>
);

export default SvgComponent;
