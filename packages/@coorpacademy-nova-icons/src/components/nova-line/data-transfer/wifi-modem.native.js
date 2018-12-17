import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 13.001h-3V9.724c.596-.348 1-.984 1-1.723a2 2 0 0 0-4 0c0 .738.404 1.376 1 1.723v3.277H4a2 2 0 0 0-2 2v4c0 1.102.896 2 2 2v1h2v-1h12v1h2v-1c1.104 0 2-.898 2-2v-4a2 2 0 0 0-2-2zm-.003 6H4v-4h16l-.003 4z" />
      <Path d="M5 16.001h7v2H5zM16 4.001c2.205 0 4 1.794 4 4h2c0-3.309-2.691-6-6-6s-6 2.691-6 6h2c0-2.206 1.795-4 4-4z" />
      <Circle cx={15} cy={17.001} r={1} />
      <Circle cx={18} cy={17.001} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
