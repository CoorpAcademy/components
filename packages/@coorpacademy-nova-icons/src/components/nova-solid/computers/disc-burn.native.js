import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 14.001a1.997 1.997 0 1 0 3.856.736 6.98 6.98 0 0 1-1.554-2.706c-.099-.015-.198-.03-.302-.03a2 2 0 0 0-2 2z" />
      <Path d="M17 17.001a6.97 6.97 0 0 1-3.564-.982A3.983 3.983 0 0 1 10 18.001a4 4 0 0 1 0-8 6.97 6.97 0 0 1 1.908-4.793A9 9 0 0 0 1 14.001a9 9 0 0 0 9 9c3.983 0 7.356-2.59 8.541-6.176a6.986 6.986 0 0 1-1.541.176z" />
      <Path d="M17 .001c1.667 6.666-2 8.75-2 8.75V5.368c-1.707.742-3 2.535-3 4.633 0 2.762 2.238 5 5 5s5-2.238 5-5c0-2.576 0-5-5-10z" />
    </G>
  </Svg>
);

export default SvgComponent;
