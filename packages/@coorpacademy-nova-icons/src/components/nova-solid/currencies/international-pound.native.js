import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11.664 7H7v4.663A10.024 10.024 0 0 1 11.664 7zM15 1.352V5h3.647A10.053 10.053 0 0 0 15 1.352zM13 .461a9.98 9.98 0 0 0-6 0V5h6V.461zM0 10a9.98 9.98 0 0 0 .461 3H5V7H.461A9.986 9.986 0 0 0 0 10zM5 18.647V15H1.354A10.047 10.047 0 0 0 5 18.647zM1.354 5H5V1.352A10.058 10.058 0 0 0 1.354 5zM16 8c-4.411 0-8 3.589-8 8 0 4.412 3.589 8 8 8s8-3.588 8-8c0-4.411-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" />
      <Path d="M16.5 11a2.503 2.503 0 0 0-2.5 2.5V15h-1v2h1v2h-1v2h6v-2h-3v-2h2v-2h-2v-1.5a.5.5 0 0 1 1 0v.5h2v-.5c0-1.378-1.121-2.5-2.5-2.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
