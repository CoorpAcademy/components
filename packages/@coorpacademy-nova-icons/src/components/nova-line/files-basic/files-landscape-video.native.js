import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 6H1v13c0 1.103.897 2 2 2h15v-2H3V6z" />
      <Path d="M11 13l6-3-6-3z" />
      <Path d="M19.414 3H7c-1.103 0-2 .898-2 2v10c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6.586L19.414 3zM7 15V5h11v3h3l.001 7H7z" />
    </G>
  </Svg>
);

export default SvgComponent;
