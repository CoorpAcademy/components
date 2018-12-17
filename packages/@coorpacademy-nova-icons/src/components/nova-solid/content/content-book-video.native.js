import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 12c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6c0-3.308-2.691-6-6-6zm-1 8v-4l3 2-3 2z" />
      <Path d="M6 20h4.262A8.032 8.032 0 0 1 10 18a8 8 0 0 1 8-8V1a1 1 0 0 0-1-1H6v20zM4 .001H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h3v-20z" />
    </G>
  </Svg>
);

export default SvgComponent;
