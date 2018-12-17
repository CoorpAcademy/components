import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .003h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 3.001H4a2 2 0 0 0-2 2v14c0 1.102.896 2 2 2h16c1.104 0 2-.898 2-2v-14a2 2 0 0 0-2-2zm-.003 16H4v-14h16l-.003 14z" />
      <Path d="M6 16.001h2v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1h2a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm1-8h1v3h2v-3h1v3h2v-3h1v3h2v-3h1v6h-2a1 1 0 0 0-1 1v1h-4v-1a1 1 0 0 0-1-1H7v-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
