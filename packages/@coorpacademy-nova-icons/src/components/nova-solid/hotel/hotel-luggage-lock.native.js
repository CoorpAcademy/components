import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M11.858 3.001C11.411 1.281 9.858 0 8 0 5.794 0 4 1.794 4 4s1.794 4 4 4c1.858 0 3.41-1.279 3.857-2.999h2.144L14 7.002h2L16.001 5h2L18 8h2l.001-3H22V3l-10.142.001zM8 6c-1.103 0-2-.898-2-2 0-1.103.897-2 2-2s2 .897 2 2c0 1.102-.897 2-2 2zM20 13h-3c0-2.206-1.794-4-4-4s-4 1.794-4 4H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1zM9 22H7v-7h2v7zm4-11c1.103 0 2 .896 2 2h-4c0-1.104.897-2 2-2zm6 11h-2v-7h2v7z" />
    </G>
  </Svg>
);

export default SvgComponent;
