import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 15.43V4.59L13.414.004H2c-1.103 0-2 .898-2 2v18c0 1.102.897 2 2 2h13.42a4.975 4.975 0 0 1-.42-1.996 4.996 4.996 0 0 1 3-4.578zm-5.368-4.164L10 10.389v6.112a2.5 2.5 0 1 1-2-2.45V7.615l5.265 1.754-.633 1.897zM12 6.004v-5l5 5h-5zM17 19.008h6v2h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
