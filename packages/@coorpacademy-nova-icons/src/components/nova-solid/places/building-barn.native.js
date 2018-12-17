import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M10 7.5a3.5 3.5 0 1 0-7 0V10h7V7.5zM3 11h7v4H3z" />
      <Path d="M22 20v-6.434a1 1 0 0 0-.485-.857l-4-2.4a1 1 0 0 0-1.029 0l-4 2.4a1 1 0 0 0-.486.857V20h-2v-4H3v4H0v2h24v-2h-2zm-7 0v-4h4v4h-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
