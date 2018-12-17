import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 3.003h10v4h4v1h2V5.59l-4.586-4.586H5c-1.103 0-2 .896-2 2v5h2V3.003zM19 21.003H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM8 18.003v-2H5c-.551 0-1-.448-1-1v-2c0-.55.449-1 1-1h3v-2H5c-1.654 0-3 1.346-3 3v2c0 1.654 1.346 3 3 3h3zM11.5 12.003H15v-2h-3.5a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.122 2.5 2.5 2.5h1a.5.5 0 0 1 0 1H9v2h3.5c1.378 0 2.5-1.121 2.5-2.5 0-1.378-1.122-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1zM19.942 10.003l-.957 3.902L18 10.003h-2l1.963 8h2.058L20 17.922l2-7.919z" />
    </G>
  </Svg>
);

export default SvgComponent;
