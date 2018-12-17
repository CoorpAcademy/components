import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5.095 10.01h7.81l-.458 5.033 1.992.181.474-5.214H15a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H6.618L4.895.563l-1.79.894L4.382 4.01H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h.086l.918 10.09a1 1 0 0 0 .996.91h6v-2H5.913l-.818-9zM4 6.01h10v2H4v-2z" />
      <Circle cx={9} cy={14.01} r={2} />
      <Path d="M22 15.414L20.586 14 19 15.586V14h-2v3.586l-1 1V17h-2v3.586l-1.707 1.707 1.414 1.414L15.414 22H19v-2h-1.586l1-1H22v-2h-1.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
