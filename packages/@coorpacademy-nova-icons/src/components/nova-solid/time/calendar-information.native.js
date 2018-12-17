import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 17.999a8 8 0 0 1 8-8c.692 0 1.359.097 2 .262V4.999c0-1.102-.897-2-2-2h-2v-3h-2v3H6v-3H4v3H2c-1.103 0-2 .898-2 2v13c0 1.102.897 2 2 2h8.263a7.946 7.946 0 0 1-.263-2zm-8-13h16v3H2v-3z" />
      <Path d="M18 11.997c-3.309 0-6 2.694-6 6 0 3.309 2.691 6 6 6 3.308 0 6-2.691 6-6 0-3.306-2.692-6-6-6zm1 10.002h-2v-4h2v4zm0-6.001a1 1 0 1 1-2 0 1 1 0 1 1 2 0z" />
    </G>
  </Svg>
);

export default SvgComponent;
