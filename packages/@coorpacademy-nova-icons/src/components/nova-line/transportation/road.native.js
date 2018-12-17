import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.976 2.783A1 1 0 0 0 17 2H7a1 1 0 0 0-.976.783l-4 18A1 1 0 0 0 3 22h18a1.002 1.002 0 0 0 .976-1.217l-4-18zM13 20v-4h-2v4H4.247L7.802 4H11v4h2V4h3.198l3.556 16H13z" />
      <Path d="M11 10h2v4h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
