import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M19.998 2h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h2v4l5.333-4h8.666c1.103 0 2-.897 2-2V4a2 2 0 0 0-1.999-2zm-8 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1-3h-2V6h2v5z"
    />
  </Svg>
);

export default SvgComponent;
