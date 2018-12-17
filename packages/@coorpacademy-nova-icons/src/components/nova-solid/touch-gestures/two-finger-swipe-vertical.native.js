import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 6.001h2v-2h2l-3-3-3 3h2zM13 18.001h-2v2H9l3 3 3-3h-2zM15 8.001a3 3 0 0 0-3 3 3 3 0 0 0-6 0v5h12v-5a3 3 0 0 0-3-3zm-5 4H8v-1a1 1 0 1 1 2 0v1zm6 0h-2v-1a1 1 0 1 1 2 0v1z" />
    </G>
  </Svg>
);

export default SvgComponent;
