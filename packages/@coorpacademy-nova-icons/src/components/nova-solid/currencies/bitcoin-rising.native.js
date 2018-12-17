import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 13.003v2h2.586L17 18.589l-2.293-2.292a.999.999 0 0 0-1.414 0l-6 6 1.414 1.414L14 18.417l2.293 2.293a.999.999 0 0 0 1.414 0L22 16.417v2.586h2v-6h-6zM10 7.503a.5.5 0 0 0-.5-.5H8v1h1.5a.5.5 0 0 0 .5-.5z" />
      <Path d="M14 13.003l1.84 1.84A8.981 8.981 0 0 0 17 13.114v-2.111h.77a9.03 9.03 0 0 0 .23-2c0-4.971-4.029-9-9-9s-9 4.029-9 9 4.029 9 9 9l5-5zm-8 0v-8h2v-1h2v1.051c1.14.232 2 1.243 2 2.449 0 .566-.195 1.082-.513 1.5.318.419.513.935.513 1.5 0 1.207-.86 2.217-2 2.449v1.051H8v-1H6z" />
      <Path d="M10 10.503a.5.5 0 0 0-.5-.5H8v1h1.5a.5.5 0 0 0 .5-.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
