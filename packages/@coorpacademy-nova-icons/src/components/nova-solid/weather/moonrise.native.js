import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10.439 2.002c.266.733.417 1.521.417 2.346a6.906 6.906 0 0 1-6.907 6.906 6.887 6.887 0 0 1-2.346-.417 6.904 6.904 0 0 0 6.49 4.562 6.907 6.907 0 0 0 6.906-6.907 6.9 6.9 0 0 0-4.56-6.49zM17 13.002l-4 4h2v4h4v-4h2z" />
    </G>
  </Svg>
);

export default SvgComponent;
