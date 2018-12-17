import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24h-24z" />
    <Path
      fill="currentColor"
      d="M12 3a9 9 0 1 0 .001 18.001A9 9 0 0 0 12 3zm3 12a1 1 0 0 1-1.832.555L11 12.303V16H9V9a1.002 1.002 0 0 1 1.832-.555L13 11.697V8h2v7z"
    />
  </Svg>
);

export default SvgComponent;
