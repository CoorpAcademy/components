import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 13.002h3v-2H2v-1h4v6h2v-2h.517l1.168 2H12l-1.433-2.454A2.99 2.99 0 0 0 12 11.002c0-1.654-1.346-3-3-3H2c-1.104 0-2 .897-2 2v6h2v-3zm6-3h1a1.001 1.001 0 0 1 0 2H8v-2zM15 16.002h3v-2h-3c-.551 0-1-.448-1-1V13h3v-2h-3c0-.552.449-1 1-1h3V8h-3c-1.654 0-3 1.346-3 3v2.002c0 1.654 1.346 3 3 3zM18 11.002v2c0 1.654 1.346 3 3 3h3v-2h-3c-.551 0-1-.448-1-1h3v-2h-3c0-.551.449-1 1-1h3v-2h-3c-1.654 0-3 1.346-3 3zM0 5h24v2H0zM0 17h24v2H0z" />
    </G>
  </Svg>
);

export default SvgComponent;
