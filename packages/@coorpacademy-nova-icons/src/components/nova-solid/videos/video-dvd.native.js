import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 4.073v4.072a3.99 3.99 0 0 1 3 3.858 3.99 3.99 0 0 1-3 3.858v4.072c3.945-.493 7-3.852 7-7.931 0-4.077-3.055-7.436-7-7.929zM1 4.003v16a2 2 0 0 0 2 2h12v-20H3a2 2 0 0 0-2 2zm6 5l5 3-5 3v-6z" />
      <Path d="M17 12.003c0-.738-.405-1.376-1-1.722v3.445c.595-.347 1-.985 1-1.723z" />
    </G>
  </Svg>
);

export default SvgComponent;
