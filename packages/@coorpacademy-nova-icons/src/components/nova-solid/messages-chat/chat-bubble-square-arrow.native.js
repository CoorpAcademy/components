import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14.998 7h-13c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h1v4l5.333-4h6.667c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM15.513 2.828L23.998 0l-2.829 8.484-1.414-4.242z" />
    </G>
  </Svg>
);

export default SvgComponent;
