import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 16a6 6 0 0 1 6-6V5c0-1.102-.896-2-2-2h-2V0h-2v3H6V0H4v3H2C.897 3 0 3.898 0 5v13c0 1.103.897 2 2 2h13.537A5.968 5.968 0 0 1 14 16zM2 5h16v3H2V5z" />
      <Path d="M20 12c-2.206 0-4 1.794-4 4h2c0-1.102.897-2 2-2s2 .898 2 2c0 1.103-.897 2-2 2h-1v3h2v-1.127A4.004 4.004 0 0 0 24 16c0-2.206-1.794-4-4-4z" />
      <Circle cx={20} cy={23} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
