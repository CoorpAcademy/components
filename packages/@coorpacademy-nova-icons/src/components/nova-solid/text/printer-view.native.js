import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 2h8.586L15 3.414V5h2V3a.997.997 0 0 0-.293-.707l-2-2A1.002 1.002 0 0 0 14 0H4a1 1 0 0 0-1 1v4h2V2zM9.683 13A6.992 6.992 0 0 1 16 9c1.488 0 2.866.469 4 1.261V8c0-1.103-.896-2-2-2H2C.897 6 0 6.897 0 8v6c0 1.102.897 2 2 2h1v3a1 1 0 0 0 1 1h6.26a6.95 6.95 0 0 1-.966-2H5v-5h4.683zM3 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
      <Path d="M20.167 18.753A4.966 4.966 0 0 0 21 16c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5a4.964 4.964 0 0 0 2.753-.833L22 23.414 23.414 22l-3.247-3.247zM16 19c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
