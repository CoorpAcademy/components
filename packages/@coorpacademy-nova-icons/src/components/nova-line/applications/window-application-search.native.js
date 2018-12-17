import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 8h4v2H3zM9 8h4v2H9zM3 11h3v2H3zM3 14h4v2H3z" />
      <Path d="M2 6h17.999v3H22V2c0-1.103-.897-2-2-2H2C.897 0 0 .897 0 2v16c0 1.103.897 2 2 2h8v-2H2V6zm5-2V2h3v2H7zm13 0h-8V2h8v2zM5 2v2H2V2h3z" />
      <Path d="M23.414 22l-3.247-3.247A4.969 4.969 0 0 0 21 16c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5a4.966 4.966 0 0 0 2.753-.833L22 23.414 23.414 22zM13 16c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zM15 8h4v1h-4zM8 11h2v2H8zM9 14h1v2H9z" />
    </G>
  </Svg>
);

export default SvgComponent;
