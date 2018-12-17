import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5.555 22c.693 1.19 1.968 2 3.445 2s2.752-.81 3.445-2h-6.89zM15 14.838V13h-2v1.838c0 1.648.745 3.16 1.965 4.162H3.035A5.378 5.378 0 0 0 5 14.838V12c0-2.206 1.794-4 4-4 .731 0 1.409.212 2 .557V6.35A5.95 5.95 0 0 0 9 6c-3.309 0-6 2.691-6 6v2.838c0 1.46-.931 2.751-2.316 3.214L0 18.279V21h18v-2.721l-.684-.227A3.385 3.385 0 0 1 15 14.838z" />
      <Path d="M19.707 5.707l-1.414-1.414L16 6.586l-2.293-2.293-1.414 1.414L14.586 8l-2.293 2.293 1.414 1.414L16 9.414l2.293 2.293 1.414-1.414L17.414 8z" />
    </G>
  </Svg>
);

export default SvgComponent;
