import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 2.001H6c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h12c1.103 0 2-.896 2-2v-16c0-1.104-.897-2-2-2zm0 2v1H6v-1h12zm0 3l.001 10H6v-10h12zm-12 13v-1h12.001v1H6z" />
      <Circle cx={9} cy={9.999} r={1} />
      <Circle cx={9} cy={12.999} r={1} />
      <Circle cx={12} cy={9.999} r={1} />
      <Circle cx={15} cy={9.999} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
