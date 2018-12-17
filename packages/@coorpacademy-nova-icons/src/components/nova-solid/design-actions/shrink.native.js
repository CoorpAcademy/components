import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22.707 2.707l-1.414-1.414L17 5.586V2h-2v7h7V7h-3.586zM2 11h2v2H2zM5 11h2v2H5zM8 11h2v2H8zM11 11h2v2h-2zM11 14h2v2h-2zM2 14h2v2H2zM2 17h2v2H2zM2 20h2v2H2zM5 20h2v2H5zM8 20h2v2H8zM11 20h2v2h-2zM11 17h2v2h-2zM6 9h2V4h5V2H6zM20 16h-5v2h7v-7h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
