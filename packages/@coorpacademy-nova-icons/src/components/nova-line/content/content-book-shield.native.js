import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 18H6V2h10v6.994h2V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h9v-2zm-6 0H2V2h2v16z" />
      <Path d="M12 11v7c0 3.813 3.797 5.579 5.804 5.98l.196.041.196-.04C20.203 23.58 24 21.813 24 18v-7H12zm10 7c0 2.763-3.154 3.756-3.998 3.973C17.176 21.757 14 20.749 14 18v-5h8v5z" />
      <Path d="M17 20h2v-2h2v-2h-2v-2h-2v2h-2v2h2z" />
    </G>
  </Svg>
);

export default SvgComponent;
