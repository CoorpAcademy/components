import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 16c-4.711 0-8 2.467-8 6v2h16v-2c0-3.533-3.289-6-8-6zm-1 5a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM18 8h-.09c-.478-2.833-2.943-5-5.91-5S6.568 5.167 6.09 8H6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2c0 1.102.897 2 2 2h8c1.104 0 2-.898 2-2a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2zm-2 4H8V8h8v4z" />
    </G>
  </Svg>
);

export default SvgComponent;
