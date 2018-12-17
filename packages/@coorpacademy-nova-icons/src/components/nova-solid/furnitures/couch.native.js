import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M20.5 9.5c-1.93 0-3.5 1.57-3.5 3.5H8c0-1.93-1.57-3.5-3.5-3.5S1 11.07 1 13v4c0 1.103.896 2 2 2v1h2v-1h15v1h2v-1c1.104 0 2-.897 2-2v-4c0-1.93-1.57-3.5-3.5-3.5z" />
      <Path d="M20.5 8.5c.155 0 .303.031.454.046C20.721 6.004 18.602 4 16 4h-3v8h3.112A4.507 4.507 0 0 1 20.5 8.5zM8.889 12H12V4H9C6.398 4 4.279 6.004 4.046 8.546c.151-.015.299-.046.454-.046A4.508 4.508 0 0 1 8.889 12z" />
    </G>
  </Svg>
);

export default SvgComponent;
