import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15.293 9.002H8.707L12 12.295z" />
      <Path d="M12 13.709l-4-4v5.293h8V9.709z" />
      <Path d="M16.318 5.274L15 .002H9L7.682 5.274a7.987 7.987 0 0 0 0 13.455L9 24.002h6l1.318-5.273a7.987 7.987 0 0 0 0-13.455zM12 18.002a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
    </G>
  </Svg>
);

export default SvgComponent;
