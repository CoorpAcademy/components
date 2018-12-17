import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.998 0c-3.308 0-6 2.693-6 6 0 3.309 2.691 6 6 6 3.308 0 6-2.691 6-6 0-3.307-2.692-6-6-6zm1 10.001h-2v-4h2v4zm0-6a1 1 0 1 1-2 0 1 1 0 1 1 2 0z" />
      <Path d="M10.067 7H1.998c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h1v4l5.333-4h6.667c1.103 0 2-.897 2-2v-4.069A7.994 7.994 0 0 1 10.067 7z" />
    </G>
  </Svg>
);

export default SvgComponent;
