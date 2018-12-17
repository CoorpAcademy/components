import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17 4c-2.206 0-4 1.794-4 4s1.794 4 4 4a3.95 3.95 0 0 0 2-.557V14c0 2.206-1.794 4-4 4h-1v2h1c3.309 0 6-2.691 6-6V8c0-2.206-1.794-4-4-4zM7 4C4.794 4 3 5.794 3 8s1.794 4 4 4a3.95 3.95 0 0 0 2-.557V14c0 2.206-1.794 4-4 4H4v2h1c3.309 0 6-2.691 6-6V8c0-2.206-1.794-4-4-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
