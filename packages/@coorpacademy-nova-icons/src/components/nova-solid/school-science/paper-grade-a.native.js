import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 19v4.328a2.93 2.93 0 0 0 .414-.328L21 18.414c.119-.118.225-.264.328-.414H17c-.551 0-1 .449-1 1zM8.5 5.5H10V7H8.5z" />
      <Path d="M20 0H6C4.897 0 4 .896 4 2v20c0 1.104.897 2 2 2h8v-5c0-1.654 1.346-3 3-3h5V2c0-1.104-.897-2-2-2zM7 4.75A.75.75 0 0 1 7.75 4h3a.75.75 0 0 1 .75.75V10H10V8.5H8.5V10H7V4.75zM11 18H7v-2h4v2zm6-4H7v-2h10v2zm0-4h-4V8h4v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
