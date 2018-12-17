import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 8.002h2v2h6v-2h2a1 1 0 0 0 .625-1.78l-5-4a1 1 0 0 0-1.249 0l-5 4A.999.999 0 0 0 11 8.002zM8 15.002H5l1.6-4H4c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h4.429l.571-4H6l2-3zM20 11.002H9.667l-.667 2h2l-2 3h3l-2.667 6H20c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
