import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 9c0-1.654-1.346-3-3-3S6 7.347 6 9c0 1.654 1.346 3 3 3s3-1.345 3-3zM8 9c0-.551.449-1 1-1s1 .449 1 1a1.001 1.001 0 0 1-2 0zM15 12c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3c0-1.653-1.346-3-3-3zm0 4a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2z" />
      <Path d="M7.293 15.294l8-8 1.414 1.414-8 8z" />
      <Path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.485 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
    </G>
  </Svg>
);

export default SvgComponent;
