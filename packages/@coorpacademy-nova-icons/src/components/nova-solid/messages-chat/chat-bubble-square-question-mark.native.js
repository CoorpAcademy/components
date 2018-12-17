import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14.998 7h-13c-1.104 0-2 .897-2 2v9c0 1.103.896 2 2 2h1v4l5.334-4h6.666c1.104 0 2-.897 2-2V9c0-1.103-.896-2-2-2zM19.998 0c-2.206 0-4 1.794-4 4h2c0-1.102.898-2 2-2 1.103 0 2 .898 2 2s-.897 2-2 2h-1v3h2V7.873a4.005 4.005 0 0 0 3-3.873c0-2.206-1.794-4-4-4z" />
      <Circle cx={19.998} cy={11} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
