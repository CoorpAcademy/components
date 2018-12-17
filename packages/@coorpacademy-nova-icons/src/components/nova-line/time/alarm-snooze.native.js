import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M8.555 20c.693 1.19 1.969 2 3.445 2s2.752-.81 3.445-2h-6.89zM18 12.838V11h-2v1.838c0 1.648.745 3.16 1.965 4.162H6.035A5.378 5.378 0 0 0 8 12.838V10c0-2.206 1.794-4 4-4V4c-3.309 0-6 2.691-6 6v2.838c0 1.46-.931 2.751-2.316 3.214L3 16.279V19h18v-2.721l-.684-.227A3.385 3.385 0 0 1 18 12.838z"
      fill="currentColor"
    />
    <Path fill="currentColor" d="M22 9h-8.081l4-5H14V2h8.081l-4 5H22z" />
  </Svg>
);

export default SvgComponent;
