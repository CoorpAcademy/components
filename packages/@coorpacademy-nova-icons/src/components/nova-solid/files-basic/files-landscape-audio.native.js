import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 6H1v13c0 1.103.897 2 2 2h15v-2H3V6z" />
      <Path d="M19.414 3H7c-1.103 0-2 .898-2 2v10c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6.586L19.414 3zM16 11.084a1.15 1.15 0 1 1-2.298 0 1.15 1.15 0 0 1 1.149-1.148V7.812l-2.682.874v3.165a1.15 1.15 0 1 1-1.149-1.149V8.269c0-.249.16-.468.397-.546l3.831-1.25a.57.57 0 0 1 .752.546v4.065zM18 8V4l4 4h-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
