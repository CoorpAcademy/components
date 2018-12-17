import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 4a8 8 0 0 0-8 8c0 4.418 3.581 8 8 8s8-3.582 8-8a8 8 0 0 0-8-8zM9 6a1 1 0 1 1 0 2 1 1 0 1 1 0-2zm0 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm-1-4a3.001 3.001 0 0 1 0-6 3.001 3.001 0 0 1 0 6z"
    />
  </Svg>
);

export default SvgComponent;
