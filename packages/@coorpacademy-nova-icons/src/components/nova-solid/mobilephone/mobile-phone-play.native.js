import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.005h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 17v1H4V6h8v1h2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3h-2z" />
      <Path d="M17 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-1 6v-4l3 2-3 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
