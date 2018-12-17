import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14.998 14v4H7.665l-2.667 2v-2h-3V9h8V7h-8c-1.103 0-2 .896-2 2v9c0 1.103.897 2 2 2h1v4l5.333-4h6.667c1.103 0 2-.897 2-2v-4h-2z" />
      <Path d="M17.998 0c-3.309 0-6 2.691-6 6h2c0-2.205 1.794-4 4-4s4 1.795 4 4-1.794 4-4 4c-1.069 0-2.074-.416-2.78-1.119l-.047-.054L16.998 7h-5v5l1.757-1.757A5.958 5.958 0 0 0 17.998 12c3.309 0 6-2.691 6-6s-2.691-6-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
