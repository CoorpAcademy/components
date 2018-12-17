import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M17 4H7C4.795 4 3 5.794 3 8v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8c0-2.206-1.795-4-4-4zm2 4v2h-2.279l-1.333-4H17c1.104 0 2 .898 2 2zM8 12h8v3H8v-3zm1.388-2l1.333-4h2.559l1.333 4H9.388zM7 6h1.612l-1.333 4H5V8c0-1.102.896-2 2-2zm12 12H5v-6h1v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4h1v6z" />
      <Circle cx={12} cy={13.5} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
