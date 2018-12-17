import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 0H10C8.897 0 8 .897 8 2v8h2V4h10v10h-7v4h7c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2zM8 20H4v-6h1v-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2v-4H8v2z" />
      <Path d="M13.707 10.707L15 12V8h-4l1.293 1.293-4 4L7 12v4h4l-1.293-1.293z" />
    </G>
  </Svg>
);

export default SvgComponent;
