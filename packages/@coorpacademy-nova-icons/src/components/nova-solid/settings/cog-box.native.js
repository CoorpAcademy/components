import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={12} cy={12} r={2.4} />
      <Path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-1 10.09h-1.79a4.343 4.343 0 0 1-.431 1.053l1.13 1.13-1.636 1.635-1.131-1.13a4.193 4.193 0 0 1-1.053.43V18h-2.181v-1.791a4.201 4.201 0 0 1-1.052-.43l-1.131 1.13-1.635-1.635 1.131-1.13a4.36 4.36 0 0 1-.431-1.053H6v-2.182h1.79c.098-.373.244-.723.431-1.053L7.09 8.726 8.727 7.09l1.131 1.13a4.24 4.24 0 0 1 1.052-.43V5.999h2.181V7.79a4.23 4.23 0 0 1 1.053.43l1.131-1.13 1.636 1.636-1.13 1.13c.187.33.333.679.431 1.053H18v2.181z" />
    </G>
  </Svg>
);

export default SvgComponent;
