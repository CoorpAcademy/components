import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3.247 9h13.507l-.223 1h2.049l.222-1H20V7h-3.42L12.868.504l-1.736.992L14.277 7H5.724l3.145-5.504L7.132.504 3.42 7H0v2h1.198l1.826 8.217A1 1 0 0 0 4 18h10v-2H4.803L3.247 9z" />
      <Path d="M20 12c-2.205 0-4 1.794-4 4h2c0-1.102.897-2 2-2 1.104 0 2 .898 2 2 0 1.103-.896 2-2 2h-1v3h2v-1.126A4.006 4.006 0 0 0 24 16c0-2.206-1.794-4-4-4z" />
      <Circle cx={20} cy={23} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
