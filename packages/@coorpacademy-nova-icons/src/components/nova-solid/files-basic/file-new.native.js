import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M15.414 2H6c-1.103 0-2 .898-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V6.586L15.414 2zM7 12h8v2H7v-2zm10 6H7v-2h10v2zM14 8V3l5 5h-5z"
    />
  </Svg>
);

export default SvgComponent;
