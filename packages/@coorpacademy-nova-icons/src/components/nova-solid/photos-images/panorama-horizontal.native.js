import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4 7.835v8.331C6.576 15.401 9.315 15 12 15s5.424.401 8 1.166V7.835C17.424 8.6 14.685 9 12 9s-5.424-.4-8-1.165z" />
      <Path d="M1 4.001v16c7.333-2.667 14.667-2.667 22 0v-16c-7.333 2.667-14.667 2.667-22 0zm20 13.541C18.145 16.531 15.063 16 12 16s-6.145.53-9 1.542V6.46C5.855 7.471 8.937 8 12 8s6.145-.529 9-1.54v11.082z" />
    </G>
  </Svg>
);

export default SvgComponent;
