import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 18.001H6v-16h10v8h2v-9a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h9v-2zm-6 0H2v-16h2v16z" />
      <Path d="M18 12.001c-3.309 0-6 2.691-6 6h2c0-2.206 1.795-4 4-4s4 1.794 4 4-1.795 4-4 4c-1.069 0-2.074-.416-2.779-1.119l-.047-.054L17 19.001h-5v5l1.758-1.757A5.955 5.955 0 0 0 18 24.001c3.309 0 6-2.691 6-6s-2.691-6-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
