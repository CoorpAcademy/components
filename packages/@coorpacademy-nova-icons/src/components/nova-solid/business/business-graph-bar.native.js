import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2V6c0-1.103-.896-2-2-2zm-.003 14H4V6h16l-.003 12z" />
      <Path d="M19 7H5v10h14V7zM9 16H7v-4h2v4zm4 0h-2v-6h2v6zm4 0h-2v-5h2v5z" />
    </G>
  </Svg>
);

export default SvgComponent;
