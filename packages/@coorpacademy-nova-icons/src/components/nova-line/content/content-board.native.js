import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 6h5V4H9V2H7v5h2z" />
      <Path d="M20 4h-2V2h-2v5h2V6h2l-.003 14H4V6h1V4H4c-1.104 0-2 .898-2 2v14c0 1.103.896 2 2 2h16c1.104 0 2-.897 2-2V6c0-1.102-.896-2-2-2z" />
    </G>
    <Path d="M19 19H5V8h14v11zM7 17h10v-7H7v7z" fill="currentColor" />
  </Svg>
);

export default SvgComponent;
