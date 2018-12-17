import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M23.414 11l-3.247-3.247C20.691 6.963 21 6.018 21 5c0-2.757-2.243-5-5-5s-5 2.243-5 5c0 2.758 2.243 5 5 5a4.964 4.964 0 0 0 2.753-.833L22 12.414 23.414 11zM13 5c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zM14 12.006H2c-1.104 0-2 .897-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8c0-1.103-.896-2-2-2zm-2.121 2L8 16.777l-3.879-2.771h7.758zm-9.879 8v-7.057l5.419 3.871a1 1 0 0 0 1.162 0L14 14.949l.002 7.057H2z" />
    </G>
  </Svg>
);

export default SvgComponent;
