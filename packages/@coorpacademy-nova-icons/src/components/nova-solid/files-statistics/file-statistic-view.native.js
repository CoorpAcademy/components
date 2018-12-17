import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9.294 18.002L3 18.003v-2h2V7h2v9.002h1V12h2v.409a7.05 7.05 0 0 1 1-1.302V10h1.41A6.955 6.955 0 0 1 18 9.295V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.104.897 2.001 2 2.001h10.407a7.003 7.003 0 0 1-3.113-3.999zM12 1l5 5h-5V1z" />
      <Path d="M20.167 18.755c.524-.79.833-1.736.833-2.754 0-2.757-2.243-5-5-5s-5 2.243-5 5a5.007 5.007 0 0 0 5 5.001c1.018 0 1.963-.31 2.753-.834L22 23.414l1.414-1.412-3.247-3.247zM16 19.001c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
