import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 15.003h2.586l1.707-1.707a.999.999 0 0 1 1.414 0l2.21 2.21 3.302-4.127a.998.998 0 0 1 1.489-.083L18 14.589l1.293-1.293a.997.997 0 0 1 .707-.293h2V8.002H2v7.001zM20 3H4c-1.103 0-2 .897-2 2v2.002h20V5c0-1.103-.896-2-2-2zM5 6a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2z" />
      <Path d="M18.707 16.71a.999.999 0 0 1-1.414 0l-3.21-3.21-3.302 4.127a1 1 0 0 1-.727.375l-.055.001a1 1 0 0 1-.707-.293L7 15.417 5.707 16.71a.997.997 0 0 1-.707.293H2V19c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2v-3.997h-1.586l-1.707 1.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
