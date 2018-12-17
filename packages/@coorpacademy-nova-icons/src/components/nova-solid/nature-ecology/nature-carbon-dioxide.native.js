import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24V24H0z" />
    <G fill="currentColor">
      <Path d="M13.75 8.5a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-.75-.75z" />
      <Path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.478 10-10S17.523 2 12 2zm-1.5 6.5H8.25a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h2.25V13H8.25A2.252 2.252 0 0 1 6 10.75v-1.5C6 8.01 7.009 7 8.25 7h2.25v1.5zm1 2.25v-1.5C11.5 8.01 12.509 7 13.75 7S16 8.01 16 9.25v1.5c0 1.241-1.009 2.25-2.25 2.25s-2.25-1.009-2.25-2.25zM18 17v1h-2.5a.5.5 0 0 1-.354-.854C16.038 16.254 17 14.988 17 14.5a.5.5 0 0 0-1 0v.5h-1v-.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5c0 .738-.739 1.766-1.362 2.5H18z" />
    </G>
  </Svg>
);

export default SvgComponent;
