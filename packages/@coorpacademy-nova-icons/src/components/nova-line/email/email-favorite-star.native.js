import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 16.771L4.121 14H11v-2H2c-1.104 0-2 .897-2 2v8c0 1.103.896 2 2 2h12c1.104 0 2-.897 2-2v-8h-4.121L8 16.771zM14.002 22H2v-7.057l5.419 3.87a.995.995 0 0 0 1.162 0L14 14.943 14.002 22zM18 0l1.714 4.286H24l-3.708 3.13L22.285 12 18 9.166 13.714 12l1.994-4.584L12 4.286h4.285z" />
    </G>
  </Svg>
);

export default SvgComponent;
