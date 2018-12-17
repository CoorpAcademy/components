import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 3l3 9 1-4.999 5-1zM15 8a7 7 0 1 0 .001 14.001A7 7 0 0 0 15 8zm0 12a1 1 0 1 1-.002-1.998A1 1 0 0 1 15 20zm1-4.172V17h-2v-2.002a1 1 0 0 1 1-1c.551 0 1-.449 1-1 0-.551-.449-1-1-1s-1 .449-1 1h-2c0-1.654 1.346-3 3-3s3 1.346 3 3a3.008 3.008 0 0 1-2 2.83z" />
    </G>
  </Svg>
);

export default SvgComponent;
