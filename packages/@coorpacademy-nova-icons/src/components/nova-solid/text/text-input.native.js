import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20 8H4c-1.103 0-2 .897-2 2v4c0 1.102.897 2 2 2h16c1.103 0 2-.898 2-2v-4c0-1.103-.897-2-2-2zm0 6h-2v-4h2v4z"
    />
  </Svg>
);

export default SvgComponent;
