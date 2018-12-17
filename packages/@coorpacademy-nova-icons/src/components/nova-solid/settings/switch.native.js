import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20 1.999H4c-1.103 0-2 .898-2 2v16c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2v-16c0-1.102-.896-2-2-2zm-4 16H8v-12h8v12z"
    />
    <Path fill="currentColor" d="M10 10.999h4v5h-4z" />
  </Svg>
);

export default SvgComponent;
