import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 2c1.654 0 3 1.346 3 3h2c0-2.757-2.243-5-5-5S4 2.243 4 5h2c0-1.654 1.346-3 3-3zM17.288 10.036L17 6H1L0 20h10.262A8.045 8.045 0 0 1 10 18a7.997 7.997 0 0 1 7.288-7.964z" />
      <Path d="M18 12c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm-4 6c0-2.206 1.794-4 4-4 .739 0 1.425.216 2.02.566l-5.453 5.453A3.957 3.957 0 0 1 14 18zm4 4a3.959 3.959 0 0 1-2.019-.566l5.452-5.452c.352.594.567 1.279.567 2.018 0 2.206-1.794 4-4 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
