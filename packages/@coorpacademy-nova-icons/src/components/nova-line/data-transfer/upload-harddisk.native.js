import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .003h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 14.001H4a2 2 0 0 0-2 2v4c0 1.102.896 2 2 2h16c1.104 0 2-.898 2-2v-4c0-1.103-.896-2-2-2zm-.003 6H4v-4h16l-.003 4zM11 6.416v6.585h2V6.416l2.293 2.292 1.414-1.414L12 2.587 7.293 7.294l1.414 1.414z" />
      <Circle cx={15} cy={18.001} r={1} />
      <Circle cx={18} cy={18.001} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
