import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M13 2c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zM19 5h2v4h-2zM19 10h2v12h-2zM13 14c-1.393 0-2.391.408-3 .768-.609-.36-1.607-.768-3-.768-3.739 0-4.869 6.136-4.986 6.836A.998.998 0 0 0 3 22c.501 0 4.576-.053 7-1.71 2.424 1.658 6.499 1.71 7 1.71a1.001 1.001 0 0 0 .987-1.165C17.869 20.136 16.739 14 13 14z" />
    </G>
  </Svg>
);

export default SvgComponent;
