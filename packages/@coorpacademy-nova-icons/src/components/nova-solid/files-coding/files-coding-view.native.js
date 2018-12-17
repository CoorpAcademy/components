import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9.293 18.008H8v-4h1.294A7.006 7.006 0 0 1 12 10.268V8.011h2v1.292a6.99 6.99 0 0 1 2-.294 6.99 6.99 0 0 1 2 .294V4.594L13.414.009H2c-1.103 0-2 .896-2 2v18c0 1.102.897 2 2 2h10.406a7.018 7.018 0 0 1-3.113-4.001zm2.707-17l5 5h-5v-5zM3 8.011h2v4H3v-4zm3 9.997H3v-4h3v4zm1-9.997h3v4H7v-4z" />
      <Path d="M20.167 18.762A4.964 4.964 0 0 0 21 16.009c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5a4.97 4.97 0 0 0 2.753-.832L22 23.422l1.414-1.414-3.247-3.246zM16 19.009c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
