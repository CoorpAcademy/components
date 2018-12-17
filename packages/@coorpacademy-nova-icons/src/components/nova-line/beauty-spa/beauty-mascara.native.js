import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001-.001h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M8 6h2V4H8V2H6v2H4v2h2v1H3v2h3v1H4v2h2v2H4v5c0 1.654 1.346 3 3 3s3-1.346 3-3v-5H8v-2h2v-2H8V9h3V7H8V6zm0 13c0 .551-.449 1-1 1s-1-.449-1-1v-3h2v3zM18 2h-2c-1.103 0-2 .897-2 2v10h6V4c0-1.103-.897-2-2-2zm0 2v4h-2V4h2zm-2 8v-2h2v2h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
