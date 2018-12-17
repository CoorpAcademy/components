import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10.067 7H1.998c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h1v4l5.333-4h6.667c1.103 0 2-.897 2-2v-4.069A7.994 7.994 0 0 1 10.067 7z" />
      <Path d="M17.998 0c-3.308 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 2c.739 0 1.425.216 2.02.566l-5.453 5.453A3.957 3.957 0 0 1 13.998 6c0-2.206 1.794-4 4-4zm0 8a3.952 3.952 0 0 1-2.018-.566l5.452-5.452c.351.594.566 1.279.566 2.018 0 2.206-1.794 4-4 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
