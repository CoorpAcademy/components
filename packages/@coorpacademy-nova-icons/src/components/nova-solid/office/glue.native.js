import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 10V8h-2.5L12 2l-1.5 6H8v2zM7 11v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9H7zm8 8H9v-4h6v4z" />
    </G>
  </Svg>
);

export default SvgComponent;
