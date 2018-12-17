import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.006h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={12} cy={9.001} r={1} />
      <Circle cx={9.5} cy={9.501} r={0.75} />
      <Circle cx={14.5} cy={9.501} r={0.75} />
      <Circle cx={14.5} cy={14.501} r={0.75} />
      <Circle cx={9.5} cy={14.501} r={0.75} />
      <Circle cx={15} cy={12.001} r={1} />
      <Circle cx={12} cy={12.001} r={1} />
      <Circle cx={9} cy={12.001} r={1} />
      <Circle cx={12} cy={15.001} r={1} />
      <Path d="M17 1.001a1 1 0 0 0-1-1H7.984A.983.983 0 0 0 7 .985v.016c0 3-3 2-3 6v10c0 4 3 3 3 6a1 1 0 0 0 1 1h8.016a.984.984 0 0 0 .984-.984v-.016c0-3 3-2 3-6v-10c0-4-3-3-3-6zm1 16c0 1.104-.897 2-2 2H8c-1.102 0-2-.896-2-2v-10c0-1.103.898-2 2-2h8c1.103 0 2 .897 2 2v10z" />
    </G>
  </Svg>
);

export default SvgComponent;
