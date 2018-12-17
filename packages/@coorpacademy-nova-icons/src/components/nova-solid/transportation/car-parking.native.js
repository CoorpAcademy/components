import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M16.484 13l1.5 3h-14l2-4h7v-2h-8l-4 7v5h2a2 2 0 0 0 4 0h8a2 2 0 0 0 4 0h2v-5l-2.286-4h-2.214zm-8.5 7h-5v-2h5v2zm11 0h-5v-2h5v2zM16.984 9h1c1.654 0 3-1.346 3-3s-1.346-3-3-3h-3v8h2V9zm0-4h1c.551 0 1 .449 1 1s-.449 1-1 1h-1V5z" />
    </G>
  </Svg>
);

export default SvgComponent;
