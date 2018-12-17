import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Circle cx={12} cy={4.5} r={3.5} />
      <Path d="M11 16H9v-2h2v-2H8v-2h3V8H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6v-2zM19 8h-6v2h3v2h-3v2h2v2h-2v2h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zM10 22h4l.5-3h-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
