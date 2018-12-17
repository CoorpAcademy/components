import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9.136 14.743l2.121 2.122-3.149 1.093zM16.561 11.561a1.5 1.5 0 1 0-2.122-2.121l-3.889 3.889 2.122 2.122 3.889-3.89z" />
      <Path d="M21 3h-3V1h-2v6h2V5h3v15H3V5h2V3H3a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
      <Path d="M15 3H8V1H6v6h2V5h7z" />
    </G>
  </Svg>
);

export default SvgComponent;
