import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M23.63 18.224C20 17 15.303 10.846 14.165 8.556A1 1 0 0 0 13.269 8H10.73c-.379 0-.727.216-.896.556C8.697 10.846 4 17 .37 18.224.084 18.32 0 18.699 0 19v1a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-1c0-.301-.084-.68-.37-.776z" />
      <Circle cx={6} cy={5} r={3} />
    </G>
  </Svg>
);

export default SvgComponent;
