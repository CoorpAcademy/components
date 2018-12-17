import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.202 10.416L14.967 9.18l-.013.013a4.357 4.357 0 0 0-5.908 0l-.013-.013-1.235 1.236a.348.348 0 0 0 0 .494l.988.989a.35.35 0 0 0 .495 0l.988-.989a.348.348 0 0 0 0-.494l-.482-.482a3.31 3.31 0 0 1 4.426 0l-.482.482a.348.348 0 0 0 0 .494l.988.989a.35.35 0 0 0 .495 0l.988-.989a.348.348 0 0 0 0-.494z" />
      <Path d="M10 12.002l-1 3h6l-1-3z" />
      <Path d="M16.318 5.274L15 .002H9L7.682 5.274a7.987 7.987 0 0 0 0 13.455L9 24.002h6l1.318-5.273a7.987 7.987 0 0 0 0-13.455zM12 18.002a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
    </G>
  </Svg>
);

export default SvgComponent;
