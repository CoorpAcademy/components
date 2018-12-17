import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Circle cx={18} cy={20} r={2} />
      <Circle cx={6} cy={20} r={2} />
      <Path d="M20.243 10.243l-8.485-8.485a6 6 0 0 0 8.485 8.485zM18.829 3.172l-3.536.707 2.828 2.828zM23 16h-5l-1-3h-5l-1 3H7v-6a1 1 0 0 0-1-1H2a2 2 0 0 0-2 2v8a1 1 0 0 0 1 1h2a3 3 0 0 1 6 0h6a3 3 0 0 1 6 0h1a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1zM5 13H2v-2h3v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
