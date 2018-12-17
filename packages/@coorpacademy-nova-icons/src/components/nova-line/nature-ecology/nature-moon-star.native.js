import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19.091 13.909L18 11l-1.091 2.909L14 15l2.909 1.091L18 19l1.091-2.909L22 15zM18.182 6.182L16 7l2.182.818L19 10l.818-2.182L22 7l-2.182-.818L19 4z" />
      <Path d="M15.333 19.533A8.01 8.01 0 0 1 10 12a8.01 8.01 0 0 1 5.333-7.533 1.002 1.002 0 0 0 .001-1.886A9.942 9.942 0 0 0 12 2C6.486 2 2 6.486 2 12s4.486 10 10 10a9.942 9.942 0 0 0 3.334-.581 1 1 0 0 0-.001-1.886zM12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8h.014C9.537 5.856 8 8.803 8 12s1.537 6.145 4.014 8H12z" />
    </G>
  </Svg>
);

export default SvgComponent;
