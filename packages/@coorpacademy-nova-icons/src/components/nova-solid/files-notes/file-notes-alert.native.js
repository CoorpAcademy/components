import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M18 2v3h-2V2h-3v3h-2V2H8v3H6V2H3v20h18V2h-3zm-6 16a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1-4h-2V8h2v6z"
    />
  </Svg>
);

export default SvgComponent;
