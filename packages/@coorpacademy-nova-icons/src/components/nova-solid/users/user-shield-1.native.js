import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <Path d="M21.487 5.126l-9-5a1 1 0 0 0-.972 0l-9 5a.999.999 0 0 0-.514.873c0 .694.114 17 10 17s10-16.306 10-17a.999.999 0 0 0-.514-.873zm-9.486.873a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM8.251 16c0-2.301 1.449-3.75 3.75-3.75s3.75 1.449 3.75 3.75h-7.5z" />
  </Svg>
);

export default SvgComponent;
