import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20 7.005H4c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zm-10 4h4v2h-4v-2zm-6 1a2 2 0 1 1 4.001.001A2 2 0 0 1 4 12.005zm3 6l2-2h6l2 2H7zm11-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
    />
  </Svg>
);

export default SvgComponent;
