import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 16a7 7 0 0 1 9-6.706V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h10.408A6.989 6.989 0 0 1 9 16zm3-15l5 5h-5V1zM3 9h7v2H3V9zm4 6H3v-2h4v2z" />
      <Path d="M20.167 18.753c.524-.79.833-1.735.833-2.753 0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5a4.964 4.964 0 0 0 2.753-.833L22 23.414 23.414 22l-3.247-3.247zM16 19c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
