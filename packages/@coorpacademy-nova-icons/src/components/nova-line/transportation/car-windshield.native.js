import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 4H3c-1.103 0-2 .896-2 2v11a1 1 0 0 0 1 1h3v-2H3V6h18v10h-2v2h3a1 1 0 0 0 1-1V6c0-1.104-.897-2-2-2z" />
      <Path d="M19.707 12.293l-3-3a.999.999 0 0 0-1.414 0l-3 3 1.414 1.414L15 12.414V22h2v-9.586l1.293 1.292 1.414-1.413zM7.293 9.293l-3 3 1.414 1.414L7 12.414V22h2v-9.586l1.293 1.292 1.414-1.414-3-3a1 1 0 0 0-1.414.001z" />
    </G>
  </Svg>
);

export default SvgComponent;
