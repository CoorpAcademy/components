import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7.5 12.751H9v.749H7.5zM19 10.5h1.5v.751H19z" />
      <Path d="M22 4H2C.897 4 0 4.897 0 6v12c0 1.104.897 2 2 2h20c1.103 0 2-.896 2-2V6c0-1.103-.897-2-2-2zM5 15H3.5v-4.5H2V9h2.25a.75.75 0 0 1 .75.751V15zm5.5-4.5h-3v.751h2.25a.75.75 0 0 1 .75.749v2.251a.75.75 0 0 1-.75.749h-3a.75.75 0 0 1-.75-.749v-4.5A.75.75 0 0 1 6.75 9h3.75v1.5zM14 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm8 3.251a.75.75 0 0 1-.75.749H17.5v-1.5h3v-.749h-2.25A.75.75 0 0 1 17.5 12V9.751A.75.75 0 0 1 18.25 9h3a.75.75 0 0 1 .75.751v4.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
