import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.94 10.003c.037-.33.06-.664.06-1.003 0-4.962-4.037-9-9-9S0 4.038 0 9s4.038 9 9 9c.34 0 .675-.022 1.005-.06a7.998 7.998 0 0 1 7.935-7.937zM8 9.535V4h2v4.465l2.555 1.703-1.109 1.663L8 9.535z" />
      <Path d="M18.002 12c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm-4 6c0-2.206 1.794-4 4-4 .739 0 1.425.216 2.02.566l-5.453 5.453A3.957 3.957 0 0 1 14.002 18zm4 4a3.952 3.952 0 0 1-2.018-.566l5.452-5.452c.352.594.566 1.279.566 2.018 0 2.206-1.794 4-4 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
