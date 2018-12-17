import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 10h6v2H9z" />
      <Path d="M20 10V5.341l-8-3.429-8 3.429V10h2v10H4v2h16v-2h-2V10h2zM8 20V8H6V6.659l6-2.571 6 2.571V8h-2v12H8z" />
    </G>
  </Svg>
);

export default SvgComponent;
