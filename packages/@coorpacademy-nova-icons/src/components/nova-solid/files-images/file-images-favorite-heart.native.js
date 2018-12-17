import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h11.683A6.962 6.962 0 0 1 13 19H3l3-4 2 2 4-5 1.699 3.965A7.008 7.008 0 0 1 18 12.294V4.586zM5.5 13A2.498 2.498 0 0 1 3 10.5a2.499 2.499 0 1 1 5 0A2.5 2.5 0 0 1 5.5 13zM12 6V1l5 5h-5zM22 16.001c-1.104 0-2 1-2 2 0-1-.896-2-2-2s-2 .895-2 2c0 3 4 6 4 6s4-3 4-6a2 2 0 0 0-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
