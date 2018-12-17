import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22.937 10.649l-3-8A1.002 1.002 0 0 0 19 2H5c-.417 0-.79.259-.937.649l-3 8c-.114.307-.072.651.114.92.188.27.495.431.823.431h1v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-9h1a1 1 0 0 0 .937-1.351zM20.557 10h-2.775l-1.5-6h2.025l2.25 6zM8.281 10l1.5-6H11v6H8.281zM13 4h1.219l1.5 6H13V4zM5.693 4h2.025l-1.5 6H3.443l2.25-6zM14 20v-5h2v5h-2zm5 0h-1v-6a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v6H5v-8h14v8z" />
      <Path d="M7 18h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1z" />
    </G>
  </Svg>
);

export default SvgComponent;
