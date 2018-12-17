import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M17.561 8.172c-.168-.114-5.001-2.026-5.189-2.1a1.002 1.002 0 0 0-.742 0c-.188.074-5.021 1.986-5.189 2.1A.996.996 0 0 0 6 9v6c0 .409.249.776.629.929l5 2a.99.99 0 0 0 .742 0l5-2A1 1 0 0 0 18 15V9a.999.999 0 0 0-.439-.828zM12 8.078L14.307 9 12 9.923 9.693 9 12 8.078zm-4 2.4l3 1.2v3.846l-3-1.2v-3.846zm8 3.845l-3 1.2v-3.846l3-1.2v3.846zM11 5h2V3h2l-3-3-3 3h2zM13 19h-2v2H9l3 3 3-3h-2zM24 12l-3-3v2h-2v2h2v2zM3 9l-3 3 3 3v-2h2v-2H3z" />
    </G>
  </Svg>
);

export default SvgComponent;
