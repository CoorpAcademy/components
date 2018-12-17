import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 8.007h2v.996h-2zM8 13.007h2v3.997H8zM7 8.007h3v4H7zM4 13.007h3v3.997H4zM4 8.008h2v3.999H4z" />
      <Path d="M2 2.004h10v4h4v3.002h2V4.59L13.414.004H2c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h8v-2H2v-18z" />
      <Path d="M20.167 18.757c.524-.79.833-1.735.833-2.753 0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5a4.964 4.964 0 0 0 2.753-.833L22 23.418l1.414-1.414-3.247-3.247zM16 19.004c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
