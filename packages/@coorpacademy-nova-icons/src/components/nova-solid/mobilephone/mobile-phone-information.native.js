import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.005h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 17.999c0-2.025.759-3.869 2-5.279V1.999c0-1.103-.897-2-2-2H2c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h8c.087 0 .171-.015.256-.025A7.99 7.99 0 0 1 10 17.999zm-8-2v-12h8v12H2zM18 11.998c-3.309 0-6 2.693-6 6 0 3.309 2.691 6 6 6 3.308 0 6-2.691 6-6 0-3.307-2.692-6-6-6zm1 10.001h-2v-4h2v4zm0-6a1 1 0 1 1-2 0 1 1 0 1 1 2 0z" />
    </G>
  </Svg>
);

export default SvgComponent;
