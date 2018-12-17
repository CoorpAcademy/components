import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20.364 3.636A8.94 8.94 0 0 0 14 1a8.94 8.94 0 0 0-6.364 2.636c-3.022 3.023-3.434 7.675-1.25 11.149L2.172 19A2 2 0 1 0 5 21.828l4.213-4.213A8.925 8.925 0 0 0 14 19a8.942 8.942 0 0 0 6.365-2.635c3.507-3.509 3.507-9.221-.001-12.729zM4 21a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm10-5a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"
    />
  </Svg>
);

export default SvgComponent;
