import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={7} cy={10.001} r={2} />
      <Path d="M4 17.001h5v-2l-2-2z" />
      <Path d="M2 2h10v4h4v4.001h2V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h7v-2H2V2zM19 22h-4v-4l-2 2v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3l-2-2v4z" />
      <Path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-6 6 1.414 1.414L17 14.415l5.293 5.292 1.414-1.414-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
