import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 .461a9.986 9.986 0 0 0-6 0V5h6V.461zM11.664 7H7v4.663A10.02 10.02 0 0 1 11.664 7zM15 1.352V5h3.647A10.068 10.068 0 0 0 15 1.352zM1.353 5H5V1.352A10.068 10.068 0 0 0 1.353 5zM0 10a9.98 9.98 0 0 0 .461 3H5V7H.461A9.986 9.986 0 0 0 0 10zM5 18.647V15H1.353A10.058 10.058 0 0 0 5 18.647zM16 8c-4.411 0-8 3.589-8 8 0 4.412 3.589 8 8 8s8-3.588 8-8c0-4.411-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" />
      <Path d="M17 11l-1 2-1-2h-2l2 4h-2v2h2v1h-2v2h2v1h2v-1h2v-2h-2v-1h2v-2h-2l2-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
