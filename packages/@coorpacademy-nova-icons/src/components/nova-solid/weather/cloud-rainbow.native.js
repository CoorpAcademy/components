import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9.186 8.512a7.918 7.918 0 0 1 1.588-1.297C9.074 4.113 5.779 2.005 2 2.005v2c3.158 0 5.886 1.844 7.186 4.507zM5.545 10.19A6.067 6.067 0 0 1 7 10.005c.226 0 .448.033.671.058C6.862 7.706 4.628 6.005 2 6.005v2c1.549 0 2.88.894 3.545 2.185z" />
      <Path d="M15 7.005a6.964 6.964 0 0 0-5.979 3.356c.966.458 1.996 1.264 2.971 2.647l-.817.575C9.678 11.459 8.393 11.005 7 11.005c-2.757 0-5 2.243-5 5s2.243 5 5 5h8c3.86 0 7-3.14 7-7 0-3.861-3.14-7-7-7z" />
    </G>
  </Svg>
);

export default SvgComponent;
