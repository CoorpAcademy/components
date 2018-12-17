import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M10 18c-4.411 0-8-3.589-8-8 0-2.021.759-3.864 2-5.274V10h2.279l2.211 6.633L14 12.5V6h-3V2.069a7.977 7.977 0 0 1 6.951 7.041l1.988-.22A9.983 9.983 0 0 0 10 0C4.486 0 0 4.486 0 10s4.486 10 10 10c.375 0 .745-.021 1.11-.061l-.22-1.988A8.168 8.168 0 0 1 10 18zm2-10v3.5l-2.49 1.867L7.721 8H6V3.083A7.933 7.933 0 0 1 9 2.07V8h3z" />
      <Path d="M23 15c0-2.206-1.794-4-4-4s-4 1.794-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-4-2c1.103 0 2 .898 2 2h-4c0-1.102.897-2 2-2zm3 9h-6v-5h6v5z" />
      <Circle cx={19} cy={19} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
