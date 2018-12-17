import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zm-.003 8H4V9h16l-.003 6z" />
      <Path d="M17 10h2v4h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
