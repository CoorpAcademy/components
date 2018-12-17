import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19.001 9c.235 0 .466.013.695.035A6.945 6.945 0 0 0 20 7c0-3.859-3.141-7-7-7-2.51 0-4.74 1.31-5.978 3.357.965.458 1.996 1.263 2.97 2.647l-.817.576C7.678 4.454 6.393 4 5 4 2.243 4 0 6.243 0 9s2.243 5 5 5h7.295a7 7 0 0 1 6.706-5zM23 15c0-2.206-1.794-4-4-4s-4 1.794-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-4-2c1.103 0 2 .898 2 2h-4c0-1.102.897-2 2-2zm3 9h-6v-5h6v5z" />
      <Circle cx={19} cy={19} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
