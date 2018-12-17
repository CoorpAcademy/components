import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 12H5c-1.654 0-3-1.346-3-3s1.346-3 3-3c.571 0 1.131.166 1.617.48a1.003 1.003 0 0 0 1.518-.613A4.973 4.973 0 0 1 13 2c2.757 0 5 2.243 5 5 0 .71-.152 1.383-.421 1.994h2.128A6.989 6.989 0 0 0 20 7c0-3.859-3.141-7-7-7a6.964 6.964 0 0 0-6.438 4.253A4.942 4.942 0 0 0 5 4C2.243 4 0 6.243 0 9s2.243 5 5 5h5v-2z" />
      <Path d="M12 10.98v7c0 3.813 3.797 5.579 5.804 5.98L18 24l.196-.039C20.203 23.56 24 21.793 24 17.98v-7H12zm10 7c0 2.763-3.154 3.756-3.998 3.973C17.176 21.736 14 20.729 14 17.98v-5h8v5z" />
      <Path d="M17 19.98h2v-2h2v-2h-2v-2h-2v2h-2v2h2z" />
    </G>
  </Svg>
);

export default SvgComponent;
