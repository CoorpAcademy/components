import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8.707 15.708l-1.414-1.414L2.586 19l4.707 4.708 1.414-1.414L6.414 20H22v-2H6.414zM20 0H6C4.897 0 4 .898 4 2v9c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V2c0-1.102-.897-2-2-2zm-.003 11H6V2h14l-.003 9z" />
      <Circle cx={13} cy={5} r={2} />
      <Path d="M13 7a3 3 0 0 0-3 3h6a3 3 0 0 0-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
