import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15.018 8.482l-5 1.63a.75.75 0 0 0-.518.713V14a1.5 1.5 0 1 0 1.5 1.5v-4.131l3.5-1.141V13a1.5 1.5 0 1 0 1.5 1.5V9.194a.747.747 0 0 0-.982-.712z" />
      <Path d="M18 5H6c-1.103 0-2 .898-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V7c0-1.102-.897-2-2-2zM6 19V7h12l.001 12H6z" />
    </G>
  </Svg>
);

export default SvgComponent;
