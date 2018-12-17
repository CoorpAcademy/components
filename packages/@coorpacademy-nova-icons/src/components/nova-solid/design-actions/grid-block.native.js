import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 16h4v4h-4zM4 16h4v4H4zM4 10h4v4H4z" />
      <Path d="M16 22H2V8h8.262A7.998 7.998 0 0 1 10 6H0v18h18V14a7.998 7.998 0 0 1-2-.262V22z" />
      <Path d="M14 12.921A8.037 8.037 0 0 1 11.079 10H10v4h4v-1.079zM18 0c-3.309 0-6 2.691-6 6 0 3.31 2.691 6 6 6s6-2.69 6-6c0-3.309-2.691-6-6-6zm-4 6c0-2.206 1.794-4 4-4 .739 0 1.425.217 2.02.566l-5.453 5.452A3.95 3.95 0 0 1 14 6zm4 4a3.959 3.959 0 0 1-2.019-.566l5.452-5.451C21.785 4.576 22 5.261 22 6c0 2.206-1.794 4-4 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
