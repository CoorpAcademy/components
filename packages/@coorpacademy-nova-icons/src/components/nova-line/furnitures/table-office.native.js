import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M22 4H2a1 1 0 0 0-1 1v15h2V10h10v9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 2v4h-6V6h6zM3 8V6h10v2H3zm12 10v-6h6v6h-6z" />
      <Circle cx={17} cy={8} r={1} />
      <Circle cx={17} cy={14} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
