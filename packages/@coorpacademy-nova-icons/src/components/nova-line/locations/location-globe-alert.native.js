import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M18 10h2c0-5.514-4.486-10-10-10S0 4.486 0 10s4.486 10 10 10a9.955 9.955 0 0 0 5.592-1.708l-1.119-1.657A7.963 7.963 0 0 1 10 18c-4.411 0-8-3.589-8-8 0-2.021.759-3.864 2-5.274V10h2.279l2.211 6.633L14 12.5V6h-3V2.069c3.94.495 7 3.859 7 7.931zm-6-2v3.5l-2.49 1.867L7.721 8H6V3.083A7.933 7.933 0 0 1 9 2.07V8h3z" />
      <Path d="M17 12h2v6h-2z" />
      <Circle cx={18} cy={20} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
