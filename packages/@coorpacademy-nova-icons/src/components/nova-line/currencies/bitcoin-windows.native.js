import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 2H3c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 4h-8V4h8v2zM8 6V4h3v2H8zM6 4v2H3V4h3zM3 20V8h17.999l-.002 12H3z" />
      <Path d="M13 10.051V9h-2v1H9v8h2v.999h2V17.95c1.14-.232 2-1.243 2-2.449 0-.564-.195-1.081-.513-1.5.318-.419.513-.936.513-1.501 0-1.207-.86-2.217-2-2.449zm0 2.449a.5.5 0 0 1-.5.5H11v-1h1.5a.5.5 0 0 1 .5.5zm-.5 3.5H11v-1h1.5a.5.5 0 0 1 0 1z" />
    </G>
  </Svg>
);

export default SvgComponent;
