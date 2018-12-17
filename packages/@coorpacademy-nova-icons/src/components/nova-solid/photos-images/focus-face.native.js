import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 12.002h-3v2h3c1.103 0 2-.898 2-2v-3h-2v3zM20 2.002h-3v2h3v3h2v-3c0-1.103-.897-2-2-2zM4 4.002h3v-2H4c-1.103 0-2 .897-2 2v3h2v-3zM7 14.002v-2H4v-3H2v3c0 1.102.897 2 2 2h3zM12 14c2.206 0 4-1.793 4-4 0-2.206-1.794-4-4-4s-4 1.794-4 4c0 2.207 1.794 4 4 4zM12 15c-4.71 0-8 2.467-8 6v1h16v-1c0-3.532-3.29-6-8-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
