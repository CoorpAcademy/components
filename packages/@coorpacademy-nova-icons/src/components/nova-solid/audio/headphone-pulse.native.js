import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14.124 16.015L11.08 9.926l-3.646 6.077H5v2h3.566l2.354-3.923 2.956 5.911 2.659-3.988H19v-2h-3.535z" />
      <Path d="M22 13.023v-.41c0-5.515-4.486-10-10-10s-10 4.485-10 10v.41c-1.12.103-2 1.033-2 2.18v2.6a2.2 2.2 0 0 0 2.2 2.2H4v-7.39c0-4.412 3.589-8 8-8s8 3.588 8 8v7.39h1.8a2.2 2.2 0 0 0 2.2-2.2v-2.6c0-1.147-.88-2.077-2-2.18z" />
    </G>
  </Svg>
);

export default SvgComponent;
