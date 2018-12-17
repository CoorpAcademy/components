import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 10.003c0-2.762-2.238-5-5-5s-5 2.238-5 5 2.238 5 5 5 5-2.238 5-5zm-7 0a2 2 0 1 1 4.001.001A2 2 0 0 1 4 10.003zM18 5.003a5 5 0 0 0-5 5c0 2.762 2.238 5 5 5s5-2.238 5-5a5 5 0 0 0-5-5zm0 7a2 2 0 1 1 .001-4.001A2 2 0 0 1 18 12.003zM18 16.003a5.98 5.98 0 0 1-4.463-2h-3.074a5.978 5.978 0 0 1-4.463 2c-.338 0-.668-.035-.991-.089-.001.029-.009.058-.009.089v4c0 1.099.9 2 2 2h10c1.1 0 2-.901 2-2v-4c0-.031-.008-.059-.009-.089a5.996 5.996 0 0 1-.991.089zm-7 4H9v-3h2v3zm4 0h-2v-3h2v3z" />
    </G>
  </Svg>
);

export default SvgComponent;
