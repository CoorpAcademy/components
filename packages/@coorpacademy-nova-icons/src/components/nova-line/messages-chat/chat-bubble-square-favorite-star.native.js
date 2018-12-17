import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14.998 13v5H7.665l-2.667 2v-2h-3V9h10V7h-10c-1.103 0-2 .896-2 2v9c0 1.103.897 2 2 2h1v4l5.333-4h6.667c1.103 0 2-.897 2-2v-5h-2z" />
      <Path d="M17.998 0l1.714 4.286h4.286l-3.708 3.13L22.283 12l-4.285-2.834L13.712 12l1.994-4.584-3.708-3.13h4.285z" />
    </G>
  </Svg>
);

export default SvgComponent;
