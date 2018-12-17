import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 8.999H9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2zm0 10H9v-8h12v8z" />
      <Path d="M3 5.999h12v1h2v-1a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2v-2H3v-8zM16.646 12.619l-2.641 4.235-1.146-1.838L11 17.999h9z" />
    </G>
  </Svg>
);

export default SvgComponent;
