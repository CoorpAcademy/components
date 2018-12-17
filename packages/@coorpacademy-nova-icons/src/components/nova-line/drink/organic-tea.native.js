import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M14.92 12H16c2.206 0 4-1.794 4-4s-1.794-4-4-4h-1V3a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8c0 1.958.81 3.729 2.11 5H0v2h14v-2h-1.11a6.977 6.977 0 0 0 2.03-4zM16 6c1.103 0 2 .896 2 2 0 1.103-.897 2-2 2h-1V6h1zM3 11V4h3v1H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H8V4h5v7c0 2.757-2.243 5-5 5s-5-2.243-5-5zm5-4v2H6V7h2z"
      fill="currentColor"
    />
    <Path
      fill="currentColor"
      d="M24 13.414L22.586 12 21 13.586V12h-2v3.586l-1 1V15h-2v3.586l-1.707 1.707 1.414 1.414L17.414 20H21v-2h-1.586l1-1H24v-2h-1.586z"
    />
  </Svg>
);

export default SvgComponent;
