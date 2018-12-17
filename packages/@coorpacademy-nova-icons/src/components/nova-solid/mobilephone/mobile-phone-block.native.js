import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 18c0-2.025.759-3.869 2-5.279V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8c.088 0 .171-.015.256-.025A7.99 7.99 0 0 1 10 18zm-8-2V4h8v12H2zM18 12c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 2c.739 0 1.425.216 2.02.566l-5.453 5.453A3.957 3.957 0 0 1 14 18c0-2.206 1.794-4 4-4zm0 8a3.959 3.959 0 0 1-2.019-.566l5.452-5.452c.352.594.567 1.279.567 2.018 0 2.206-1.794 4-4 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
