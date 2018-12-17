import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7.5 18.998a2.5 2.5 0 1 1 .5-4.949V7.61l4.181 1.393H18V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h8v-5.502a2.5 2.5 0 0 1-2.5 2.5zM12 1l5 5h-5V1z" />
      <Path d="M12 11v7c0 3.813 3.797 5.579 5.804 5.982l.196.038.196-.038C20.203 23.579 24 21.813 24 18v-7H12zm9 7h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
