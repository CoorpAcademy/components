import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M20 21.999H4c-1.104 0-2-.897-2-2v-16c0-1.102.896-2 2-2h16c1.104 0 2 .898 2 2v16c0 1.103-.896 2-2 2zm-16-18v16h15.997l.003-16H4z"
      fill="currentColor"
    />
    <Path d="M8 5.999v12h8v-12H8zm2 10v-4h4v4h-4z" fill="currentColor" />
  </Svg>
);

export default SvgComponent;
