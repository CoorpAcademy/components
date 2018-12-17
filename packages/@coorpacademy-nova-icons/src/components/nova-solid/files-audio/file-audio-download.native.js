import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 12.083V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h10.681A6.957 6.957 0 0 1 12 19.004c0-3.527 2.609-6.434 6-6.921zM12 1l5 5h-5V1zm.632 10.262L10 10.385v6.113a2.5 2.5 0 1 1-2-2.449V7.61l5.265 1.754-.633 1.898z" />
      <Path d="M22.293 17.296L20 19.589v-5.586h-2v5.586l-2.293-2.293-1.414 1.414L19 23.417l4.707-4.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
