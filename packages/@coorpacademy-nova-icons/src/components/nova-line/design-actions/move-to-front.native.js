import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 7H1v16h16v-2H3zM5 2h2v2H5zM8 2h2v2H8zM11 2h2v2h-2zM14 2h2v2h-2zM20 2h2v2h-2zM17 2h2v2h-2zM20 11h2v2h-2z" />
      <Path d="M5 11h2v2H5zM5 8h2v2H5zM5 5h2v2H5zM20 8h2v2h-2zM20 5h2v2h-2zM5 14h2v2H5zM5 17h2v2H5zM8 17h2v2H8zM11 17h2v2h-2zM14 17h2v2h-2zM17 17h2v2h-2zM20 17h2v2h-2zM20 14h2v2h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
