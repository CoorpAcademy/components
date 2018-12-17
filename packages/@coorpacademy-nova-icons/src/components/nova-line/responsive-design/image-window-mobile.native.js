import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 0h-6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm-1 2v6h-4V2h4z" />
      <Path d="M20 22H2V10h11V8H2V6h11V4H2C.897 4 0 4.898 0 6v16c0 1.104.897 2 2 2h18c1.103 0 2-.896 2-2v-8h-2v8z" />
      <Path d="M17 20l-4-6-3 4-2-2-3 4z" />
      <Circle cx={7} cy={13} r={2} />
    </G>
  </Svg>
);

export default SvgComponent;
