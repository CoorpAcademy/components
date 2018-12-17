import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 0h4v2h-4zM19 20H5v-2H3v6h2v-2h14v2h2v-6h-2zM23 3H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.5 10a.75.75 0 0 1-.75.75H5.5v.75h3V13H4.75a.75.75 0 0 1-.75-.75V10a.75.75 0 0 1 .75-.75H7V8.5H4V7h3.75a.75.75 0 0 1 .75.75V10zm7.5 1h-2v2h-2v-2h-2V9h2V7h2v2h2v2zm4 2h-1.5V8.5H17V7h2.25a.75.75 0 0 1 .75.75V13z" />
    </G>
  </Svg>
);

export default SvgComponent;
