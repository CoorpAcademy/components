import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 12h5v2H5zM15 16h2v-2h2v-2h-2v-2h-2v2h-2v2h2z" />
      <Path d="M21 7h-1V5h-4v2H8V5H4v2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm-1 10H4V9h16v8z" />
    </G>
  </Svg>
);

export default SvgComponent;
