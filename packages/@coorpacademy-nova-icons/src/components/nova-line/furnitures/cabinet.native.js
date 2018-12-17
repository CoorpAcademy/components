import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M22 4H2v2h1v15a1 1 0 0 0 1 1h1v1h2v-1h10v1h2v-1h1a1 1 0 0 0 1-1V6h1V4zM5 16h6v4H5v-4zm0-2v-3h14v3H5zm8 6v-4h6v4h-6zm6-11H5V6h14v3z" />
      <Circle cx={16} cy={18} r={1} />
      <Circle cx={8} cy={18} r={1} />
      <Circle cx={12} cy={12.5} r={1} />
      <Circle cx={12} cy={7.5} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
