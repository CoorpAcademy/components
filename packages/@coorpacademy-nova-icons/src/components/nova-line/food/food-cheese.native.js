import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002-.001h24.001V24H-.002z" />
    <G fill="currentColor">
      <Path d="M11.836 2.014a1.005 1.005 0 0 0-.543.279l-8 8 .009.009A.985.985 0 0 0 3 11v3a1 1 0 0 0 1 1h1c.551 0 1 .449 1 1 0 .551-.449 1-1 1H4a1 1 0 0 0-1 1v3a1.001 1.001 0 0 0 1.242.971l16-4c.446-.112.758-.512.758-.971V7c0-1-2.908-6.031-9.164-4.986zm.639 1.926c3.324-.438 5.152 1.246 6 2.41L7.26 9.154l5.215-5.214zM19 16.219l-14 3.5V19c1.654 0 3-1.346 3-3s-1.346-3-3-3v-1.219l14-3.5v7.938z" />
      <Circle cx={16} cy={14} r={2} />
      <Circle cx={10} cy={15} r={1} />
      <Circle cx={12} cy={12} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
