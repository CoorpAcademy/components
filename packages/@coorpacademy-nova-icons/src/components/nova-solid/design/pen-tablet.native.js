import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M8 4.5a1.5 1.5 0 0 0-3 0V5h3v-.5zM8 15V6H5v9l1.5 3z" />
      <Path d="M21 7H10v2h5v10H3V7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm0 8h-4v-2h4v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
