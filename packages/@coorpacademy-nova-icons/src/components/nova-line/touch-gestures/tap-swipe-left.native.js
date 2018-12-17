import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5.408 6h3.586V4H5.408l1.293-1.293-1.414-1.414L1.58 5l3.707 3.707 1.414-1.414zM12.5 12A4.505 4.505 0 0 0 8 16.5V24h9v-7.5c0-2.481-2.019-4.5-4.5-4.5zM15 22h-5v-5.5c0-1.378 1.122-2.5 2.5-2.5s2.5 1.122 2.5 2.5V22z" />
      <Path d="M12.5 15c-.827 0-1.5.673-1.5 1.5V18h3v-1.5c0-.827-.673-1.5-1.5-1.5zM12.5 8a7.483 7.483 0 0 0-6.924 4.615l1.846.77A5.486 5.486 0 0 1 12.5 10a5.49 5.49 0 0 1 5.068 3.359l1.842-.779A7.488 7.488 0 0 0 12.5 8z" />
    </G>
  </Svg>
);

export default SvgComponent;
