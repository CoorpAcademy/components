import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 4.001H3c-1.104 0-2 .897-2 2v12c0 1.103.896 2 2 2h18c1.104 0 2-.897 2-2v-12c0-1.102-.896-2-2-2zm-.003 14H3v-12h18l-.003 12z" />
      <Path d="M6 13.001h1v3h2v-8H7v3H6v-3H4v8h2zM17 16.001h2v-6h1v-2h-4v2h1zM12 16.001h1c1.104 0 2-.897 2-2v-4c0-1.103-.896-2-2-2h-1c-1.104 0-2 .897-2 2v4c0 1.103.896 2 2 2zm0-6h1l-.003 4H12v-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
