import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M20 13v4l-2 2v-3l-2 1v5h4l2-4v-6zM6 19l-2-2v-4l-2-1v6l2 4h4v-5l-2-1zM18 10V6h-4V2h-4v4H6v4h4v8h4v-8z" />
    </G>
  </Svg>
);

export default SvgComponent;
