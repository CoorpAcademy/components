import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 9h-2V6h1a1 1 0 0 0 .555-1.832l-6-4a1.003 1.003 0 0 0-1.109 0l-6 4A.999.999 0 0 0 6 5.999h1v3H5v2h14V9zm-4 0h-2V6h2v3zM9 5.999h2v3H9v-3zM6 15h5v3h2v-3h5v3h2v-4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4h2v-3z" />
      <Circle cx={5} cy={22} r={2} />
      <Circle cx={12} cy={22} r={2} />
      <Circle cx={19} cy={22} r={2} />
    </G>
  </Svg>
);

export default SvgComponent;
