import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 17.015v-8l7.138 3.571A7.964 7.964 0 0 1 18 10.016V4.6L13.414.015H2c-1.103 0-2 .897-2 2v18c0 1.102.897 2 2 2h9.078a7.953 7.953 0 0 1 .035-8.055L5 17.015zm7-16l5 5h-5v-5z" />
      <Path d="M18 12c-3.309 0-6 2.692-6 6s2.691 6 6 6 6-2.692 6-6-2.691-6-6-6zm3 7h-4v-5h2v3h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
