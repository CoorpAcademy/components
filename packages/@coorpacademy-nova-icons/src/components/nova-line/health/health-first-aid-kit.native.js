import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M20 7h-4V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3H4c-1.104 0-2 .898-2 2v10c0 1.103.896 2 2 2h16c1.104 0 2-.897 2-2V9c0-1.102-.896-2-2-2zM10 5h4v2h-4V5zm9.997 14H4V9h16l-.003 10z" />
      <Path d="M13 11h-2v2H9v2h2v2h2v-2h2v-2h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
