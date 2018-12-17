import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.998 14a7.999 7.999 0 0 1-7.997-7.955C4.953 6.498.998 10.341.998 15c0 1.735.541 3.392 1.573 4.836L-.002 24h11c5.514 0 10-4.037 10-9 0-.523-.06-1.031-.156-1.53a7.944 7.944 0 0 1-2.844.53z" />
      <Path d="M17.998-.001c-3.308 0-6 2.693-6 6 0 3.309 2.691 6 6 6 3.308 0 6-2.691 6-6 0-3.307-2.692-6-6-6zm1 10.001h-2V6h2v4zm0-6a1 1 0 1 1-2 0 1 1 0 1 1 2 0z" />
    </G>
  </Svg>
);

export default SvgComponent;
