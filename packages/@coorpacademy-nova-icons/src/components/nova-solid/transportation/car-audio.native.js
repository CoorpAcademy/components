import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.5 15l.5 1H4l2-4h5v-2H5l-4 7v5h2a2 2 0 0 0 4 0h8a2 2 0 0 0 4 0h2v-5l-1.143-2H17.5zM8 20H3v-2h5v2zm11 0h-5v-2h5v2z" />
      <Path d="M21 5.194a.75.75 0 0 0-.983-.712l-5 1.63a.75.75 0 0 0-.517.713V10a1.5 1.5 0 1 0 1.5 1.5V7.369l3.5-1.141V9a1.5 1.5 0 1 0 1.5 1.5V5.194z" />
    </G>
  </Svg>
);

export default SvgComponent;
