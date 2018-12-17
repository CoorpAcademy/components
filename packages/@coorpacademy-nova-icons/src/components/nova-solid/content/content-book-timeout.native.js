import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6 20.001h4.262A8.022 8.022 0 0 1 10 18.003a8 8 0 0 1 8-8V1.002a1 1 0 0 0-1-1H6v19.999zM4 .002H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h3v-20z" />
      <Path d="M18 11.987c-3.309 0-6 2.692-6 6 0 3.307 2.691 6 6 6s6-2.693 6-6c0-3.308-2.691-6-6-6zm3 7h-4v-5h2v3h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
