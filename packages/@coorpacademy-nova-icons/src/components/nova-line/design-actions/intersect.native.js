import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 9V3c0-1.102-.897-2-2-2H3c-1.103 0-2 .898-2 2v9c0 1.103.897 2 2 2h6V9h5zM7 7v5H3V3h9v4H7z" />
      <Path d="M20 9h-6v5H9v6c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2v-9c0-1.102-.897-2-2-2zm-9 11v-4h5v-5h4l.001 9H11z" />
    </G>
  </Svg>
);

export default SvgComponent;
