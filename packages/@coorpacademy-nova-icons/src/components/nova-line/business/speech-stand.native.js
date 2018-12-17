import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21.937 15.649l-3-8A1 1 0 0 0 18 7H9V5h2.277c.346.596.985 1 1.723 1a2 2 0 0 0 0-4c-.738 0-1.376.404-1.723 1H8a1 1 0 0 0-1 1v3H6a1 1 0 0 0-.937.649l-3 8c-.114.307-.072.652.114.921.188.269.495.43.823.43h8v3H8v2h8v-2h-3v-3h8a1.001 1.001 0 0 0 .937-1.351zM4.443 15l2.25-6H7v2h2V9h8.307l2.25 6H4.443z" />
      <Path d="M11 10l-1 4h7l-1-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
