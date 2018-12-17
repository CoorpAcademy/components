import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 16.77l6.556-4.683A2.013 2.013 0 0 0 14 12H2c-.193 0-.378.036-.556.088L8 16.77z" />
      <Path d="M8.581 18.813a1.002 1.002 0 0 1-1.162 0l-7.364-5.26A1.996 1.996 0 0 0 0 14v8c0 1.102.896 2 2 2h12c1.104 0 2-.898 2-2v-8c0-.153-.021-.303-.055-.446l-7.364 5.259zM20-.001c-2.206 0-4 1.795-4 4h2c0-1.102.897-2 2-2s2 .898 2 2-.897 2-2 2h-1v3h2V7.872A4.003 4.003 0 0 0 24 4a4.005 4.005 0 0 0-4-4.001z" />
      <Circle cx={20} cy={11} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
