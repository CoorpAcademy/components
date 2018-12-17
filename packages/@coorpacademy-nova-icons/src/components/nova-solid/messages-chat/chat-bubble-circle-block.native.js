import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.998 14a7.999 7.999 0 0 1-7.997-7.955C4.953 6.498.998 10.341.998 15c0 1.735.541 3.392 1.573 4.836L-.002 24h11c5.514 0 10-4.037 10-9 0-.523-.06-1.031-.156-1.53a7.944 7.944 0 0 1-2.844.53z" />
      <Path d="M17.998 0c-3.308 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 2c.739 0 1.425.216 2.02.566l-5.453 5.453A3.957 3.957 0 0 1 13.998 6c0-2.206 1.794-4 4-4zm0 8a3.952 3.952 0 0 1-2.018-.566l5.452-5.452c.351.594.566 1.279.566 2.018 0 2.206-1.794 4-4 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
