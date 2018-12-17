import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002 0h24.001v24.001H-.002z" />
    <G fill="currentColor">
      <Path d="M16 11.001c0-1.104-.896-2-2-2s-2 1-2 1-.896-1-2-1-2 .896-2 2c0 1.105 1 2 1 2-1 2 2 4 2 4s-1-3 1-3 1 3 1 3 3-2 2-4c0 0 1-.895 1-2z" />
      <Path d="M5.873 6.875A7.937 7.937 0 0 1 12 4c4.411 0 8 3.59 8 8.001h2C22 6.486 17.514 2 12 2a9.924 9.924 0 0 0-7.547 3.453L3 4v5.001h5L5.873 6.875zM18.126 17.127A7.94 7.94 0 0 1 12 20.001c-4.411 0-8-3.589-8-8H2c0 5.515 4.486 10 10 10a9.926 9.926 0 0 0 7.547-3.453L21 20.001v-5h-5l2.126 2.126z" />
    </G>
  </Svg>
);

export default SvgComponent;
