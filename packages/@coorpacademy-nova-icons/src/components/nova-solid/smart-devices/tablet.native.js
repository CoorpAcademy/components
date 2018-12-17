import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={9} cy={10.001} r={1} />
      <Circle cx={9} cy={14.001} r={1} />
      <Circle cx={12} cy={10.001} r={1} />
      <Circle cx={15} cy={10.001} r={1} />
      <Path d="M18 2.001H6c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h12c1.103 0 2-.896 2-2v-16c0-1.104-.897-2-2-2zm0 16.998H6v-14h12v14z" />
    </G>
  </Svg>
);

export default SvgComponent;
