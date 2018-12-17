import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 15v7H2v-7.057l5.419 3.87a.995.995 0 0 0 1.162 0l3.001-2.143-1.162-1.628L8 16.771 4.121 14H10v-2H2c-1.104 0-2 .897-2 2v8c0 1.103.896 2 2 2h12c1.104 0 2-.897 2-2v-7h-2zM18 0c-3.309 0-6 2.691-6 6h2c0-2.205 1.795-4 4-4s4 1.795 4 4c0 2.206-1.795 4-4 4-1.07 0-2.074-.416-2.779-1.119l-.047-.054L17 7h-5v5l1.758-1.757A5.954 5.954 0 0 0 18 12c3.309 0 6-2.691 6-6s-2.691-6-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
