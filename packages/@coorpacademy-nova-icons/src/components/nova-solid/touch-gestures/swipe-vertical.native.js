import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17 11.005h-7v-3l-6 3v6h6l2-4h5zM17 17.005h-2v3h-2l3 3 3-3h-2zM15 8.005h2v-3h2l-3-3-3 3h2z" />
    </G>
  </Svg>
);

export default SvgComponent;
