import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 11.537V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a1.98 1.98 0 0 0 1.201-.41A5.964 5.964 0 0 1 14 16a5.98 5.98 0 0 1 2-4.463zM8 6H6v2h2v2H6v2H4v-2h2V8H4V6h2V4H4V2h2v2h2v2zM20 12c-2.206 0-4 1.794-4 4h2c0-1.102.897-2 2-2s2 .898 2 2c0 1.103-.897 2-2 2h-1v3h2v-1.127A4.005 4.005 0 0 0 24 16c0-2.206-1.794-4-4-4z" />
      <Circle cx={20} cy={23} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
