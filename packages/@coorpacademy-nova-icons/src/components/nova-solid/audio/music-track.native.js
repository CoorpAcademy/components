import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13.658 15.819L18 13.648V6.352a8.976 8.976 0 0 0-7-3.349 9 9 0 0 0 0 18c.701 0 1.38-.088 2.034-.239a2.983 2.983 0 0 1-.717-.919 3 3 0 0 1 1.341-4.026zM11 15.002a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
      <Path d="M20 4.502v10.383l-5.447 2.722.894 1.79L22 16.121V4.502z" />
    </G>
  </Svg>
);

export default SvgComponent;
