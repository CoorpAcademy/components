import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 17V9l7.138 3.571A7.966 7.966 0 0 1 18 10.002V4.586L13.414.001H2c-1.103 0-2 .897-2 2v18c0 1.102.897 2 2 2h9.078a7.953 7.953 0 0 1 .035-8.055L5 17zm7-16l5 5h-5V1z" />
      <Path d="M18 12c-3.309 0-6 2.694-6 6 0 3.309 2.691 6 6 6 3.308 0 6-2.691 6-6 0-3.306-2.692-6-6-6zm1 10h-2v-4h2v4zm-1-5.004a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
