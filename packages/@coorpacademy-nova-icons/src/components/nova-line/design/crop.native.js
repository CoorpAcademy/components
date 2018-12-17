import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M9 15v-5H7v7h14v-2z" />
      <Path d="M15 14h2V7H3v2h12zM7 2h2v4H7zM15 18h2v4h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
