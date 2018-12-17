import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 6C9.838-.537 2 2.701 2 7.682 2 16 12 22 12 22s10-6 10-14.318C22 2.701 14.162-.537 12 6zm-1 3a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0V9zm-3 2v-1a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4 7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm4-7a1 1 0 1 1-2 0v-1a1 1 0 1 1 2 0v1z"
    />
  </Svg>
);

export default SvgComponent;
