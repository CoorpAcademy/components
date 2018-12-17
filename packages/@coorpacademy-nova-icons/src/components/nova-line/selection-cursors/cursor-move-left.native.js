import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 8.001c-2.205 0-4 1.794-4 4s1.795 4 4 4 4-1.794 4-4-1.795-4-4-4zm0 6c-1.104 0-2-.897-2-2 0-1.102.896-2 2-2s2 .898 2 2c0 1.103-.896 2-2 2zM8 8.001l-6 4 6 4v-3h4v-2H8z" />
    </G>
  </Svg>
);

export default SvgComponent;
