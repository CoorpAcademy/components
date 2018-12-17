import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M19.998 2h-16a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1v4l4-4h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-11 3a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 8.998 5zm-3 10l2.812-4.512 2.15 3.449 3.688-5.916L18.998 15h-13z"
    />
  </Svg>
);

export default SvgComponent;
