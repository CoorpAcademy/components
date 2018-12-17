import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M18 2H6c-1.104 0-2 .898-2 2v4h1v12c0 1.103.896 2 2 2h10c1.104 0 2-.897 2-2V7h1V4c0-1.102-.896-2-2-2zm0 4h-1V4h1v2zM9 6V4h2v2H9zm4-2h2v2h-2V4zM6 4h1v2H6V4zm11 16H7V8h10v12z" />
      <Path d="M9 15h2v2h2v-2h2v-2h-2v-2h-2v2H9z" />
    </G>
  </Svg>
);

export default SvgComponent;
