import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M11.789 15.957L11.78 16H16a1 1 0 0 0 1-1v-2c0-3.323-2.735-6-5-6a1 1 0 0 0-1 1v7c0 .477.342.858.789.957z" />
      <Path d="M22 4.999a3 3 0 1 0-6 0c0 1.307.838 2.405 2 2.816V17h-6.42l-.4 2H7.82l-.4-2H3.652l-.5 3H2v2h15v-2h-1.152l-.167-1H18v1h2v-1h1v-2h-1V7.816a2.988 2.988 0 0 0 2-2.817z" />
      <Path d="M3 16h4.22l-.009-.043A.986.986 0 0 0 8 15V8a1 1 0 0 0-1-1c-2.265 0-5 2.677-5 6v2a1 1 0 0 0 1 1z" />
    </G>
  </Svg>
);

export default SvgComponent;
