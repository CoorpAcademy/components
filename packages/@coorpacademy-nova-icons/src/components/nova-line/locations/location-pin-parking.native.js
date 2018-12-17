import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M9 13a1 1 0 0 0 1-1h4a1 1 0 1 0 2 0h1v-2l-2.001-4H9l-2 4v2h1a1 1 0 0 0 1 1zm4-2v-1h2v1h-2zm-3-4h4l1 2H9l1-2zm-1 3h2v1H9v-1z" />
      <Path d="M18 2H6c-1.103 0-2 .898-2 2v11c0 1.103.897 2 2 2h2.434L12 22.943 15.566 17H18c1.103 0 2-.897 2-2V4c0-1.102-.897-2-2-2zm0 13h-3.566L12 19.057 9.566 15H6V4h12v11z" />
    </G>
  </Svg>
);

export default SvgComponent;
