import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M8 11l-3 6v4h2v.5a1.5 1.5 0 0 0 3 0V21h6v.5a1.5 1.5 0 0 0 3 0V21h2v-4l-3.001-6H8zm2 8H7v-2h3v2zm9 0h-3v-2h3v2zM8 15l1-2h8l1 2H8zM11.358 3.001C10.911 1.281 9.358 0 7.5 0c-2.206 0-4 1.794-4 4s1.794 4 4 4c1.858 0 3.41-1.279 3.858-2.999h2.143L13.5 7.002h2L15.501 5h2L17.5 8h2l.001-3H21.5V3l-10.142.001zM7.5 6c-1.103 0-2-.898-2-2 0-1.103.897-2 2-2s2 .897 2 2c0 1.102-.897 2-2 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
