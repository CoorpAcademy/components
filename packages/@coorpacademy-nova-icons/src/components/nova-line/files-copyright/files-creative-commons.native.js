import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 2.008h10v4h4V8h2V4.594L13.414.009H2c-1.103 0-2 .896-2 2v18c0 1.102.897 2 2 2h2v-2H2V2.008z" />
      <Path d="M6 10v14h18V10H6zm16 12H8V12h14v10z" />
      <Path d="M12 21h3v-2h-3c-.551 0-1-.373-1-.833v-2.334c0-.459.449-.833 1-.833h3v-2h-3c-1.654 0-3 1.271-3 2.833v2.334C9 19.729 10.346 21 12 21zM15 18.167C15 19.729 16.346 21 18 21h3v-2h-3c-.551 0-1-.373-1-.833v-2.334c0-.459.449-.833 1-.833h3v-2h-3c-1.654 0-3 1.271-3 2.833v2.334z" />
    </G>
  </Svg>
);

export default SvgComponent;
