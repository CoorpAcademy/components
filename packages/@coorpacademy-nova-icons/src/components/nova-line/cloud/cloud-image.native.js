import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .004h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 12H5c-1.654 0-3-1.346-3-3s1.346-3 3-3c.569 0 1.129.167 1.619.482a1 1 0 0 0 1.516-.614A4.975 4.975 0 0 1 13 2c2.757 0 5 2.243 5 5 0 1.13-.391 2.162-1.025 3h2.34c.435-.91.685-1.926.685-3 0-3.859-3.141-7-7-7a6.963 6.963 0 0 0-6.438 4.254A4.915 4.915 0 0 0 5 4C2.243 4 0 6.243 0 9s2.243 5 5 5h5v-2z" />
      <Path d="M23 12H13a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1zm-1 2v3.586l-1.293-1.293a.999.999 0 0 0-1.414 0l-2.49 2.49-1.355-.678a1.004 1.004 0 0 0-1.154.188l-.294.293V14h8zm-8 8v-.586l1.197-1.197 1.355.678a1 1 0 0 0 1.154-.188L20 18.414l2 2V22h-8z" />
      <Circle cx={16} cy={16} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
