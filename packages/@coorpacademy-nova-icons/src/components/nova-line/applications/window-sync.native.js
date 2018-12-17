import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 6h17.999v3.994H22V2c0-1.103-.897-2-2-2H2C.897 0 0 .897 0 2v16c0 1.103.897 2 2 2h8v-2H2V6zm5-2V2h3v2H7zm13 0h-8V2h8v2zM5 2v2H2V2h3z" />
      <Path d="M18 11.994c-3.309 0-6 2.691-6 6h2c0-2.205 1.794-4 4-4s4 1.795 4 4c0 2.206-1.794 4-4 4-1.069 0-2.074-.416-2.783-1.123l-.044-.051L17 18.994h-5v5l1.757-1.757A5.958 5.958 0 0 0 18 23.994c3.309 0 6-2.691 6-6s-2.691-6-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
