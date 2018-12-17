import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001-.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M16.279 8H7.721a1 1 0 0 0-.949.684L5 14v7a2 2 0 0 0 4 0v-1h6v1a2 2 0 0 0 4 0v-7l-1.772-5.316A1 1 0 0 0 16.279 8zM8 10h8l1 4H7l1-4zm.5 9a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 8.5 19zm5.5-1.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 14 17.5z" />
      <Path d="M22 2H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2v-5l2-6h12l2 6v5h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM5 6H3V4h2v2zm16 0h-2V4h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
