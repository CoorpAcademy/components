import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6 10v6l5-3z" />
      <Path d="M15 5V3H3c-1.103 0-2 .896-2 2v16c0 1.103.897 2 2 2h12v-2c4.411 0 8-3.589 8-8s-3.589-8-8-8zm-2 16H3V5h10v16zm2-10c1.103 0 2 .896 2 2 0 1.103-.897 2-2 2v-4zm0 8v-2c2.206 0 4-1.794 4-4 0-2.205-1.794-4-4-4V7c3.309 0 6 2.691 6 6s-2.691 6-6 6z" />
    </G>
  </Svg>
);

export default SvgComponent;
