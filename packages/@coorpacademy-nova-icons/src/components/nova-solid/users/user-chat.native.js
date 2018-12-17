import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19.001 2h-6a5.016 5.016 0 0 0-4.812 3.641l1.925.543A3.01 3.01 0 0 1 13.001 4h6c1.654 0 3 1.346 3 3v2c0 1.654-1.346 3-3 3a1 1 0 0 0-.6.2l-2.4 1.8v-1a1 1 0 0 0-1-1h-2v2h1v2a1 1 0 0 0 1.6.8l3.749-2.812A5.007 5.007 0 0 0 24 9V7a5.004 5.004 0 0 0-4.999-5z" />
      <Path d="M8.001 16c2.205 0 4-1.794 4-4 0-2.205-1.795-4-4-4-2.206 0-4 1.795-4 4 0 2.206 1.794 4 4 4zM8.001 17c-4.711 0-8 2.467-8 6v1h16v-1c0-3.533-3.29-6-8-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
