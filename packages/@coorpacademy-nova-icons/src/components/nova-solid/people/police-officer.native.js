import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 3L5 5l1 2v1c0 .424.398.816 1.072 1.14A5.006 5.006 0 0 0 12 15a5.006 5.006 0 0 0 4.928-5.86C17.602 8.816 18 8.424 18 8V7l1-2-7-2zm-2 2h4v2l-2 1-2-1V5zm2 8c-1.654 0-3-1.346-3-3 0-.086.019-.177.026-.265.877.167 1.891.265 2.974.265s2.097-.098 2.974-.265c.007.088.026.179.026.265 0 1.654-1.346 3-3 3zM12 16c-4.71 0-8 2.467-8 6v2h16v-2c0-3.533-3.29-6-8-6zm0 7a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm0-3a1 1 0 1 1 0-2 1 1 0 1 1 0 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
