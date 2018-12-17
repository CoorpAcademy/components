import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M20 5h-1V2h-2v5h-1V5H9V2H7v5H6V5H4c-1.103 0-2 .898-2 2v13c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.102-.897-2-2-2zm-.003 15H4V9h16l-.003 11z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
