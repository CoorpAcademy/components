import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6.848 2.14L3.451 3.349 18 7l-2.423-2.67zM22.553 14.106L18 16.382V13.62l5.447-2.726-.895-1.788L18 11.382V7H3v16h2v-2h11v2h2v-4.38l5.447-2.726-.894-1.788zM13 18H8a2 2 0 0 1-2-2h9a2 2 0 0 1-2 2zm0-6H8a2 2 0 0 1-2-2h9a2 2 0 0 1-2 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
