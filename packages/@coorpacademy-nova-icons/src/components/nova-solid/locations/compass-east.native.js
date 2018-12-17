import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <Path
      fill="currentColor"
      d="M12 3a9 9 0 1 0 .001 18.001A9 9 0 0 0 12 3zm3 7h-4v1h3v2h-3v1h4v2h-5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h5v2z"
    />
  </Svg>
);

export default SvgComponent;
