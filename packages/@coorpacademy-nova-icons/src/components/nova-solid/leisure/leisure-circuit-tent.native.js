import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M13 4h2V2h-4v4h2zM12.651 7.241a1 1 0 0 0-1.301 0L4.63 13h14.74l-6.719-5.759zM21 23a1 1 0 0 0 .707-1.707C20.467 20.053 20.002 16.162 20 14H4c-.002 2.162-.467 6.053-1.707 7.293A1.002 1.002 0 0 0 3 23h5.666L12 18l3.334 5H21z" />
    </G>
  </Svg>
);

export default SvgComponent;
