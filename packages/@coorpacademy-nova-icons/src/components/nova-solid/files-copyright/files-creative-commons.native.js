import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 8V4.586L13.414 0H2C.897 0 0 .897 0 2v18c0 1.103.897 2 2 2h2V10c0-1.101.9-2 2-2h12zm-6-7l5 5h-5V1z" />
      <Path d="M6 10v14h18V10H6zm16 12H8V12h14v10z" />
      <Path d="M12 21h3v-2h-3c-.551 0-1-.448-1-1v-2c0-.551.449-1 1-1h3v-2h-3c-1.654 0-3 1.346-3 3v2c0 1.654 1.346 3 3 3zM15 18c0 1.654 1.346 3 3 3h3v-2h-3c-.551 0-1-.448-1-1v-2c0-.551.449-1 1-1h3v-2h-3c-1.654 0-3 1.346-3 3v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
