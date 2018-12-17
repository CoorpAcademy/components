import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17 12.001h-6v-1h5v-2H9v-3l-6 3v8h6l2-3h6z" />
      <Path d="M21 11.501c0-3.321-1.035-6.488-2.994-9.157l-1.612 1.183A13.386 13.386 0 0 1 19 11.501c0 2.111-.496 4.19-1.438 6.062L16 16.001v5h5l-1.962-1.961A15.505 15.505 0 0 0 21 11.501z" />
    </G>
  </Svg>
);

export default SvgComponent;
