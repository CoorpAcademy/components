import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M15.414 2H6c-1.103 0-2 .898-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V6.586L15.414 2zm2.587 18H6V4h2v9l2-2 2 2V4h2v4h4l.001 12z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
