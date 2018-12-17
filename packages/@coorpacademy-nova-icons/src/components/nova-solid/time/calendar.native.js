import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20 5h-2V2h-2v3H8V2H6v3H4c-1.103 0-2 .898-2 2v13c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.102-.897-2-2-2zM9 16H5v-4h4v4zm6 0h-4v-4h4v4zm5-6H4V7h16v3z"
    />
  </Svg>
);

export default SvgComponent;
