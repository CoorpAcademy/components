import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 1.999H4c-1.103 0-2 .897-2 2v16c0 1.103.897 1.999 2 1.999h16c1.103 0 2-.896 2-1.999v-16c0-1.103-.897-2-2-2zm-16 18v-16h16l.001 16H4z" />
      <Path d="M6 10.999h5v-5H6v5zm2-3h1v1H8v-1zM6 17.999h5v-5H6v5zm2-3h1v1H8v-1zM13 10.999h5v-5h-5v5zm2-3h1v1h-1v-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
