import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4 14H2v1.051c-1.14.232-2 1.242-2 2.449C0 18.878 1.121 20 2.5 20h1a.5.5 0 0 1 0 1H0v2h2v1h2v-1.05c1.14-.232 2-1.242 2-2.45C6 19.121 4.879 18 3.5 18h-1a.5.5 0 0 1 0-1H6v-2H4v-1zM11.293 11.294l-3 3 1.414 1.414 3-3L15 15V9H9zM21 3V-.001h-4V3h-3v3.999h3V10h4V6.999h3V3z" />
    </G>
  </Svg>
);

export default SvgComponent;
