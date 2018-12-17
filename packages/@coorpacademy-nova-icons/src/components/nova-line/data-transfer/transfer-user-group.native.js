import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 9.001H5a2 2 0 0 0-2 2v8c0 1.102.896 2 2 2h6v1H8v2h8v-2h-3v-1h6c1.104 0 2-.898 2-2v-8c0-1.103-.896-2-2-2zm0 2l-.002 5H5v-5h14zm-14 8v-1h13.998l-.001 1H5z" />
      <Circle cx={5} cy={3.001} r={2} />
      <Path d="M5 5.001a3 3 0 0 0-3 3h6a3 3 0 0 0-3-3z" />
      <Circle cx={12} cy={2.001} r={2} />
      <Path d="M12 4.001a3 3 0 0 0-3 3h6a3 3 0 0 0-3-3z" />
      <Circle cx={19} cy={3.001} r={2} />
      <Path d="M19 5.001a3 3 0 0 0-3 3h6a3 3 0 0 0-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
