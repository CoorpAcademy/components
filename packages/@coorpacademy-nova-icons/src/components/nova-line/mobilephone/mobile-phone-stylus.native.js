import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4 15.999v-8h10v-4c0-1.104-.897-2-2-2H4c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h8c1.103 0 2-.896 2-2v-4H4zm8-12v2H4v-2h8zm-8 16v-2h8v2H4z" />
      <Path d="M21.192 4.807a1.696 1.696 0 0 0-2.398 0L11.6 12.002l-.6 2.997 2.997-.6 7.195-7.194a1.696 1.696 0 0 0 0-2.398z" />
    </G>
  </Svg>
);

export default SvgComponent;
