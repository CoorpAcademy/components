import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20.414 4H13v18h9c1.103 0 2-.897 2-2V7.586L20.414 4zM18 10V5l5 5h-5zM11 4H3.586L0 7.586V20c0 1.103.897 2 2 2h9V4zm-5 6H1l5-5v5z" />
    </G>
  </Svg>
);

export default SvgComponent;
