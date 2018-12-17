import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.007h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 14.999l3-2 3 2-3-6z" />
      <Path d="M4 15.999v-8h10v-4c0-1.104-.897-2-2-2H4c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h8c1.103 0 2-.896 2-2v-4H4zm8-12v2H4v-2h8zm-8 16v-2h8v2H4z" />
    </G>
  </Svg>
);

export default SvgComponent;
