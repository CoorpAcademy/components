import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 3h10v4h4v1h2V5.586L16.414 1H5c-1.103 0-2 .898-2 2v5h2V3zM19 21H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM15 18v-7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v7h2v-2h2v2h2zm-4-4v-2h2v2h-2zM4 16h.517l1.168 2H8l-1.432-2.454A2.991 2.991 0 0 0 8 13c0-1.654-1.346-3-3-3H2v8h2v-2zm0-4h1a1.001 1.001 0 0 1 0 2H4v-2zM22 13c0-1.654-1.346-3-3-3h-3v8h2v-2h.517l1.168 2H22l-1.432-2.454A2.991 2.991 0 0 0 22 13zm-3 1h-1v-2h1a1.001 1.001 0 0 1 0 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
