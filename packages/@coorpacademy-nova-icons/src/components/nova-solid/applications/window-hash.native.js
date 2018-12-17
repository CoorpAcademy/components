import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 3H4c-1.103 0-2 .897-2 2v2.002h20V5c0-1.103-.896-2-2-2zM5 6a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM12.834 14.003H11l-.834 2H12z" />
      <Path d="M2 19c0 1.104.897 2 2 2h16a2 2 0 0 0 2-2V8.002H2V19zm4-2.997h2l.834-2H7v-2h2.667l.417-1h2.166l-.417 1h1.834l.417-1h2.166l-.417 1H17v2h-2l-.834 2H16v2h-2.667l-.417 1H10.75l.417-1H9.333l-.417 1H6.75l.417-1H6v-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
