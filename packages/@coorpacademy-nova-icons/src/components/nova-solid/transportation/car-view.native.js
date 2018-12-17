import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M16.488 12.975L18 16H4l2-4h6.408a7.027 7.027 0 0 1-2.148-2H5l-4 7v5h2a2 2 0 0 0 4 0h8a2 2 0 0 0 4 0h2v-5l-2.544-4.451a6.952 6.952 0 0 1-1.968.426zM8 20H3v-2h5v2zm11 0h-5v-2h5v2zM20.167 8.753C20.691 7.963 21 7.018 21 6c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5a4.964 4.964 0 0 0 2.753-.833L22 13.414 23.414 12l-3.247-3.247zM16 9c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
