import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M21 10H11a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8c.265 0 .52-.105.707-.293l2-2A.996.996 0 0 0 22 19v-8a1 1 0 0 0-1-1zm-9 2h8v6h-2v2h-6v-8z" />
      <Path d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V9h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1 5h-1V5h-2v2h-2V5h-2v2h-2V5H9v2H8a1 1 0 0 0-1 1v1H5v2h2v2H5v2h2v2H5v2h2v1H4V4h16v3z" />
    </G>
  </Svg>
);

export default SvgComponent;
