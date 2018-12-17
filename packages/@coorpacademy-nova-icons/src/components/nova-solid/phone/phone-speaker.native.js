import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15 13h2c0-3.309-2.691-6-6-6v2c2.206 0 4 1.795 4 4z" />
      <Path d="M11 3v2c4.411 0 8 3.589 8 8h2c0-5.514-4.485-10-10-10zM11 11v2h2a2 2 0 0 0-2-2z" />
      <Path d="M18 16h-4a1 1 0 0 0-1 1v1c-4 0-6.937-3.062-7-7h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5c0 6.075 4.925 11 11 11h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
