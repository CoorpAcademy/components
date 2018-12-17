import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 3.003h10v4h4v1h2V5.59l-4.586-4.586H5c-1.103 0-2 .896-2 2v5h2V3.003zM19 21.003H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM3 15.003h2v3h2v-8H5v3H3v-3H1v8h2zM14.5 13.003c0-1.654-1.346-3-3-3s-3 1.346-3 3v2c0 1.654 1.346 3 3 3a2.95 2.95 0 0 0 1.285-.301l1.008 1.008 1.414-1.414-1.008-1.007c.188-.392.301-.824.301-1.286v-2zm-2 2a1.001 1.001 0 0 1-2 0v-2c0-.55.449-1 1-1s1 .45 1 1v2zM23 10.003h-2.333l-1.233 2.056-1.234-2.056h-2.333l2.401 4-2.401 4H18.2l1.234-2.055 1.233 2.055H23l-2.4-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
