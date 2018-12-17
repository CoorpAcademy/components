import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12.998 3.998v-4h-2v4h-11v2h3v4h2v-4h6v7h2v-7h6v5h2v-5h3v-2zM16.998 17.998h6l-3-6z" />
      <Circle cx={3.998} cy={13.998} r={3} />
      <Path d="M8.998 18.998c0 4 3.239 5 6 5 0 0-2-2-2-5s2-5 2-5c-2.761 0-6 1-6 5z" />
    </G>
  </Svg>
);

export default SvgComponent;
