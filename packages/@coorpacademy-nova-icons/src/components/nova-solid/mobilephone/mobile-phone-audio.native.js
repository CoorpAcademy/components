import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.004h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 16v2H4V6h8v2h2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4h-2z" />
      <Path d="M16 1.451v8.26a2.491 2.491 0 0 0-1-.211 2.5 2.5 0 0 0 0 5c2.574 0 3-2.5 3-2.5V5.287l1.743 1.218 1.144-1.641L16 1.451z" />
    </G>
  </Svg>
);

export default SvgComponent;
