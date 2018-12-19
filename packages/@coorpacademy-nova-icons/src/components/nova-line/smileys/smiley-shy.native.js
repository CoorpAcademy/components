import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 2C6.486 2 2 6.486 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.514-4.486-10-10-10zm6 13a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2zM5 14c0-.551.449-1 1-1s1 .449 1 1a1.001 1.001 0 0 1-2 0zm7 6a7.985 7.985 0 0 1-6.254-3.025c.085.007.167.025.254.025 1.654 0 3-1.346 3-3s-1.346-3-3-3c-.766 0-1.458.297-1.988.771C4.135 7.466 7.666 4 12 4s7.865 3.466 7.988 7.771A2.972 2.972 0 0 0 18 11c-1.654 0-3 1.346-3 3s1.346 3 3 3c.087 0 .169-.018.254-.025A7.985 7.985 0 0 1 12 20z" />
      <Path d="M7 8h4v2H7zM13 8h4v2h-4zM10 16h4v2h-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
