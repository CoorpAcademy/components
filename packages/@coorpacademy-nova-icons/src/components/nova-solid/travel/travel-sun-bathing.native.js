import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M10 5h3v2h-3zM11.365 10.951l-1.414 1.414-2.122-2.122L9.243 8.83zM4 11h2v3H4zM19.504 12.668L15.949 18H3v3h2v2h2v-2h8v2h2v-2h.555L22 14.332zM8 3H2v6a6 6 0 0 0 6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
