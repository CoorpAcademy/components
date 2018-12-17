import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20 6.002h-1v-1a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2V17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.002a2 2 0 0 0-2-2zm-12 4H4v-2h4v2zm5 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"
    />
  </Svg>
);

export default SvgComponent;
