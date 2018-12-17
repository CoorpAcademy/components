import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14.998 13v5H7.665l-2.667 2v-2h-3V9h12V7h-12c-1.103 0-2 .896-2 2v9c0 1.103.897 2 2 2h1v4l5.333-4h6.667c1.103 0 2-.897 2-2v-5h-2zM20.998 5h-2c-.551 0-1-.449-1-1s.449-1 1-1h4V1h-2V0h-2v1c-1.654 0-3 1.346-3 3s1.346 3 3 3h2c.551 0 1 .449 1 1s-.449 1-1 1h-4v2h2v1h2v-1c1.654 0 3-1.346 3-3s-1.346-3-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
