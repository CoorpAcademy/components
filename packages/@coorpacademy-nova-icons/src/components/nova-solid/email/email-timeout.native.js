import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15.771 13.679l-7.189 5.135a1.006 1.006 0 0 1-1.163-.001l-7.364-5.26A2.003 2.003 0 0 0 0 14v8c0 1.103.896 2 2 2h12c1.104 0 2-.897 2-2v-8c0-.092-.016-.181-.027-.269a9.886 9.886 0 0 1-.202-.052z" />
      <Path d="M8 16.771l5.67-4.05a8.118 8.118 0 0 1-.949-.721H2a2 2 0 0 0-.555.088L8 16.771zM18-.016c-3.309 0-6 2.692-6 6s2.691 6 6 6 6-2.692 6-6-2.691-6-6-6zm3 7h-4v-5h2v3h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
