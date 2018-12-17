import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 4v5.535l3.445 2.297 1.11-1.664L10 8.465V4z" />
      <Path d="M2 9c0-3.86 3.14-7 7-7 3.859 0 7 3.14 7 7 0 .695-.105 1.366-.295 2h2.063A8.97 8.97 0 0 0 18 9c0-4.962-4.037-9-9-9S0 4.038 0 9s4.038 9 9 9v-2c-3.86 0-7-3.14-7-7zM19 22h-4v-4l-2 2v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3l-2-2v4z" />
      <Path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-6 6 1.414 1.414L17 14.415l5.293 5.292 1.414-1.414-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
