import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6.051 2.005h2v2h-2zM2.793 3.313l1.414 1.415-1.415 1.414-1.414-1.414zM0 8.005h2v2H0zM3 9.005c0 .391.06.779.17 1.141A6.971 6.971 0 0 1 7 9.005c.17 0 .33.01.5.019a9.045 9.045 0 0 1 2.58-2.569A3.999 3.999 0 0 0 3 9.005zM11.278 3.383L12.692 4.8l-1.416 1.413-1.414-1.416zM15 7.005a6.964 6.964 0 0 0-5.979 3.356c.966.458 1.996 1.264 2.971 2.647l-.817.575C9.678 11.459 8.393 11.005 7 11.005c-2.757 0-5 2.243-5 5s2.243 5 5 5h8c3.86 0 7-3.14 7-7 0-3.861-3.14-7-7-7z" />
    </G>
  </Svg>
);

export default SvgComponent;
