import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M17.549 9.195L16 3h-4v2h-2V3H6L1 23h15.853c-1.605-2.438-3.519-5.861-3.519-8.333a5.66 5.66 0 0 1 4.215-5.472zM12 21h-2v-6h2v6zm0-8h-2V7h2v6z" />
      <Path d="M19 11a4 4 0 0 0-4 4c0 3 4 8 4 8s4-5 4-8a4 4 0 0 0-4-4zm0 6a2 2 0 1 1 .001-4.001A2 2 0 0 1 19 17z" />
    </G>
  </Svg>
);

export default SvgComponent;
