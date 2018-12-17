import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6 4h2v2H6zM4 6h2v2H4zM6 8h2v2H6zM4 10h2v2H4z" />
      <Path d="M2 2h2v2h2V2h8l.001 8H16V2c0-1.104-.897-2-2-2H2C.897 0 0 .896 0 2v16c0 1.103.897 2 2 2h8v-2H2V2z" />
      <Path d="M24 16.286h-4.286L18 12l-1.715 4.286H12l3.708 3.13L13.714 24 18 21.166 22.285 24l-1.993-4.584z" />
    </G>
  </Svg>
);

export default SvgComponent;
