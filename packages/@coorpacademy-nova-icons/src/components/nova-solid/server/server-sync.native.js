import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .004h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 6V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v4h20zm-4-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM3 2h5v2H3V2zM0 7v6h11.761a8.01 8.01 0 0 1 3.409-2.475A.976.976 0 0 1 15 10a1 1 0 1 1 2 0c0 .025-.013.047-.015.071A8.096 8.096 0 0 1 18 10a8.05 8.05 0 0 1 2 .262V7H0zm8 4H3V9h5v2zm5 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM10 18c0-1.459.396-2.822 1.079-4H0v4c0 1.103.896 2 2 2h8.262A8.045 8.045 0 0 1 10 18zm-2 0H3v-2h5v2zM18 12c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4c-1.078 0-2.065-.44-2.811-1.188L17 19h-5v5l1.761-1.761A5.94 5.94 0 0 0 18 24c3.309 0 6-2.691 6-6s-2.691-6-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
