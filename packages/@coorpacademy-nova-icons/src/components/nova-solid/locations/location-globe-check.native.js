import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M19 14c.054 0 .105.007.158.008A9.957 9.957 0 0 0 20 10c0-4.1-2.47-7.619-6-9.162V4h-3v3h3v3l-3 1-2 5-5-3V7l3-2V.459C2.943 1.734 0 5.523 0 10c0 5.523 4.477 10 10 10a9.999 9.999 0 0 0 3.023-.468A5.998 5.998 0 0 1 19 14zM22.293 16.293L18 20.586l-2.293-2.293-1.414 1.413L18 23.414l5.707-5.708z" />
    </G>
  </Svg>
);

export default SvgComponent;
