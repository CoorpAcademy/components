import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M20 2H4c-1.104 0-2 .898-2 2v16c0 1.103.896 2 2 2h16c1.104 0 2-.897 2-2V4c0-1.102-.896-2-2-2zm0 18H4V4h16v16z" />
      <Path d="M11 14h2v3h4V7h-4v3h-2V7H7v10h4z" />
    </G>
  </Svg>
);

export default SvgComponent;
