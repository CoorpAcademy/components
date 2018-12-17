import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21.525 8.161l-.707-.707-2.121 2.121.706.707a.502.502 0 0 1 0 .708l-3.536 3.537 2.121 2.12 3.536-3.535a3.477 3.477 0 0 0 1.025-2.475 3.474 3.474 0 0 0-1.024-2.476zM16.575 3.212l-.707-.707a3.504 3.504 0 0 0-4.949.001L7.383 6.041l2.121 2.122 3.536-3.536a.501.501 0 0 1 .707 0l.707.706 2.121-2.121z" />
    </G>
    <G fill="currentColor">
      <Path d="M5.262 14.526l-.707-.707a.5.5 0 0 1-.001-.707L8.09 9.576l-2.121-2.12-3.536 3.535a3.505 3.505 0 0 0 0 4.95l.707.707 2.122-2.122zM14.454 15.94l-3.535 3.535a.502.502 0 0 1-.354.147.489.489 0 0 1-.353-.147l-.708-.707-2.121 2.122.707.707a3.472 3.472 0 0 0 2.475 1.026h.001a3.48 3.48 0 0 0 2.474-1.025l3.535-3.537-2.121-2.121z" />
    </G>
    <Path
      fill="currentColor"
      d="M19.404 2.506l2.12 2.122-7.072 7.069-2.12-2.122zM9.504 12.405l2.121 2.121-7.072 7.07-2.12-2.121zM21.171 16H24v2h-2.829zM15.929 21.243h2V24h-2zM6.03 0h2v2.858h-2zM0 6.102h2.787v2H0z"
    />
  </Svg>
);

export default SvgComponent;
