import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19.196 14.021L15 13.182v-4.18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v5H9a1.001 1.001 0 0 0-.895 1.448l3 6a1 1 0 0 0 .894.553h7a1 1 0 0 0 1-1v-6a.998.998 0 0 0-.803-.982z" />
      <Path d="M18 2.001H6c-1.103 0-2 .898-2 2v7c0 1.102.897 2 2 2h3v-2H6v-7h12v7h2v-7c0-1.102-.896-2-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
