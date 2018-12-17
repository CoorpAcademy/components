import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.007h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 15.999v2H4v-12h8v2h2v-4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4h-2z" />
      <Path d="M10 14.999l3-6 3 6-3-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
