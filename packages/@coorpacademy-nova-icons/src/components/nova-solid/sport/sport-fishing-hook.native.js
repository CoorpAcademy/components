import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <Path
      fill="currentColor"
      d="M13 14h2v3c0 1.103-.897 2-2 2s-2-.897-2-2V8.858c1.72-.448 3-2 3-3.858 0-2.205-1.794-4-4-4S6 2.795 6 5c0 1.858 1.28 3.411 3 3.858V17c0 2.205 1.794 4 4 4s4-1.795 4-4V9l-4 5zM8 5c0-1.103.897-2 2-2s2 .897 2 2c0 1.102-.897 2-2 2s-2-.898-2-2z"
    />
  </Svg>
);

export default SvgComponent;
