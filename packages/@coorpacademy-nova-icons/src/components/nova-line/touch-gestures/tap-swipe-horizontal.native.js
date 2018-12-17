import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4.414 6H8V4H4.414l1.293-1.293-1.414-1.414L.586 5l3.707 3.707 1.414-1.414zM18.707 1.293l-1.414 1.414L18.586 4H15v2h3.586l-1.293 1.293 1.414 1.414L22.414 5zM11.506 12a4.505 4.505 0 0 0-4.5 4.5V24h9v-7.5c0-2.481-2.019-4.5-4.5-4.5zm2.5 10h-5v-5.5c0-1.378 1.122-2.5 2.5-2.5s2.5 1.122 2.5 2.5V22z" />
      <Path d="M11.506 15c-.827 0-1.5.673-1.5 1.5V18h3v-1.5c0-.827-.673-1.5-1.5-1.5zM11.506 8a7.486 7.486 0 0 0-6.925 4.615l1.846.77A5.49 5.49 0 0 1 11.506 10a5.494 5.494 0 0 1 5.068 3.359l1.842-.779A7.49 7.49 0 0 0 11.506 8z" />
    </G>
  </Svg>
);

export default SvgComponent;
