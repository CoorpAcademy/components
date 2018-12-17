import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M0 16h13v4H0z" />
      <Path d="M17 0a2 2 0 0 0-2 2v1H2v2h3v3.172A3.004 3.004 0 0 0 3 11c0 1.654 1.346 3 3 3s3-1.346 3-3H7c0 .551-.449 1-1 1s-1-.449-1-1 .449-1 1-1h1V5h8v19h4V2a2 2 0 0 0-2-2zM20 3h3v4h-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
