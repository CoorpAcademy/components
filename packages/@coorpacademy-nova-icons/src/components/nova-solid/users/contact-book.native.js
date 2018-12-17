import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <Path
      fill="currentColor"
      d="M19.001 2h-12c-1.103 0-2 .896-2 2v1h2v1h-4v2h2v2h2v1h-4v2h2v2h2v1h-4v2h2v2c0 1.102.897 2 2 2h12c1.103 0 2-.898 2-2V4c0-1.104-.897-2-2-2zm-6 5.999A2 2 0 1 1 13 12 2 2 0 0 1 13 8zm-3 8.001c0-1.841 1.159-3 3-3s3 1.159 3 3h-6z"
    />
  </Svg>
);

export default SvgComponent;
