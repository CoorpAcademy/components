import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20.72 17.411C18.14 19.09 15.11 20 12 20s-6.14-.91-8.72-2.589L1.84 18.85C4.82 20.891 8.37 22 12 22s7.18-1.109 10.16-3.15l-1.44-1.439z" />
      <Path d="M12 18a5.6 5.6 0 0 0 5.6-5.6C17.6 8.4 12 2 12 2S6.4 8.4 6.4 12.4A5.6 5.6 0 0 0 12 18zm0-3.75A2.252 2.252 0 0 0 14.25 12h1.5A3.754 3.754 0 0 1 12 15.75v-1.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
