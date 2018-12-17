import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M18 7c-2.757 0-5 2.243-5 5 0 1.13.391 2.162 1.025 3h-4.05A4.954 4.954 0 0 0 11 12c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5h12c2.757 0 5-2.243 5-5s-2.243-5-5-5zM3 12c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm15 3c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"
    />
  </Svg>
);

export default SvgComponent;
