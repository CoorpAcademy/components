import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M3 16l2-4h5v-2H4l-4 7v5h2a2 2 0 0 0 4 0h8a2 2 0 0 0 4 0h2v-5l-.571-1H3zm4 4H2v-2h5v2zm11 0h-5v-2h5v2zM12 0v7c0 3.575 5.053 5.699 5.629 5.929l.371.148.371-.148C18.947 12.699 24 10.575 24 7V0H12zm9 7h-2v2h-2V7h-2V5h2V3h2v2h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
