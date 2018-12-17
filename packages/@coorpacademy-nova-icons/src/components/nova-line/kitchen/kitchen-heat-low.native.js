import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002-.002h24.001v24.001H-.002z" />
    <G fill="currentColor">
      <Path d="M13 11.551V6c0-2.206-1.795-4-4-4S5 3.794 5 6v5.551A5.932 5.932 0 0 0 3 16c0 3.309 2.691 6 6 6s6-2.691 6-6a5.932 5.932 0 0 0-2-4.449zM9 20c-2.205 0-4-1.795-4-4 0-1.25.584-2.409 1.604-3.18A.999.999 0 0 0 7 12.022V6c0-1.103.896-2 2-2s2 .897 2 2v6.022c0 .313.146.608.396.798C12.416 13.591 13 14.75 13 16c0 2.205-1.795 4-4 4z" />
      <Path d="M10 14.277V12H8v2.277c-.596.347-1 .985-1 1.723a2 2 0 0 0 4 0c0-.738-.404-1.376-1-1.723zM17 3h2v2h-2zM17 7h2v2h-2zM17 11h4v2h-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
