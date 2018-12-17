import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M21 11c-1.654 0-3 1.346-3 3v5c0 .551-.449 1-1 1s-1-.449-1-1v-9c0-1.326-.87-2.44-2.065-2.836C13.525 4.251 11.024 2 8 2 4.691 2 2 4.691 2 8s2.691 6 6 6c2.807 0 5.162-1.939 5.814-4.547.108.16.186.341.186.547v9c0 1.654 1.346 3 3 3s3-1.346 3-3v-5c0-.551.449-1 1-1h1v-2h-1zM8 12c-2.205 0-4-1.795-4-4s1.795-4 4-4 4 1.795 4 4-1.795 4-4 4z" />
      <Path d="M9.293 8.707l-2-2 1.414-1.413 2 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
