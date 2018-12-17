import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.998 14.001A8 8 0 0 1 10 6.046C4.953 6.499.998 10.342.998 15.001c0 1.735.541 3.392 1.572 4.836l-2.572 4.164h11c5.514 0 10-4.037 10-9 0-.523-.06-1.031-.156-1.53-.885.338-1.84.53-2.844.53z" />
      <Path d="M17.998-.015c-3.308 0-6 2.692-6 6s2.691 6 6 6 6-2.692 6-6-2.691-6-6-6zm3 7h-4v-5h2v3h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
