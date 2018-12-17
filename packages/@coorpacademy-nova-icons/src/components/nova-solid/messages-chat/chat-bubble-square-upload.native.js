import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12.292 7H1.998c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h1v4l5.334-4h6.666c1.104 0 2-.897 2-2v-6.294A7.007 7.007 0 0 1 12.292 7zM23.705 5.292L18.998.585l-4.707 4.707 1.414 1.414 2.293-2.293V10h2V4.413l2.293 2.293z" />
    </G>
  </Svg>
);

export default SvgComponent;
