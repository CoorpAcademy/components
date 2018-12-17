import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 12l3-3H4c0-3.859 3.141-7 7-7a6.99 6.99 0 0 1 5.736 3h2.313C17.574 2.042 14.524 0 11 0 6.038 0 2 4.038 2 9H0l3 3zM19 6l-3 3h2c0 .695-.104 1.365-.295 2h2.063A8.978 8.978 0 0 0 20 9h2l-3-3zM5.264 13H2.95A9.01 9.01 0 0 0 10 17.929v-2.006A7.01 7.01 0 0 1 5.264 13zM23 13H13a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1zm-6 6v-2h2v2h-2zm2 1v2h-2v-2h2zm-3-3v2h-2v-2h2zm4 0h2v2h-2v-2zm-6 3h2v2h-2v-2zm6 2v-2h2v2h-2z" />
      <Path d="M11.501 11h2.449a2.503 2.503 0 0 0-2.449-3h-1a.5.5 0 0 1 0-1h3.5V5h-2V4h-2v1.05c-1.14.232-2 1.242-2 2.449 0 1.378 1.122 2.5 2.5 2.5h1a.5.5 0 0 1 0 1.001zM8.001 11H10v2H8.001z" />
    </G>
  </Svg>
);

export default SvgComponent;
