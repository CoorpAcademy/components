import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.613 17H7.387a1 1 0 0 0-.949 1.317l1.333 4c.137.408.519.683.95.683h6.559a1 1 0 0 0 .949-.684l1.333-4A1.002 1.002 0 0 0 16.613 17zM18 10V8h-2.05a3.922 3.922 0 0 0-.456-1.406l1.251-1.398-1.49-1.334-1.129 1.264A3.96 3.96 0 0 0 13 4.643V3h-2v1.643a3.997 3.997 0 0 0-1.125.482l-1.13-1.264-1.49 1.334 1.251 1.398c-.235.43-.391.901-.455 1.407H6v2h2v2H6v2h2v2h8v-2h2v-2h-2v-2h2zm-6 5a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm0-3a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm0-3a1 1 0 1 1 0-2 1 1 0 1 1 0 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
