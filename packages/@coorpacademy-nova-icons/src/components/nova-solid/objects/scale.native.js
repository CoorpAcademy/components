import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001.001H24v24.001H-.001z" />
    <G fill="currentColor">
      <Path d="M13 15c0 2.762 2.238 5 5 5s5-2.238 5-5H13zM6 20a5 5 0 0 0 5-5H1a5 5 0 0 0 5 5zM13 8V7h3.656l-2.1 7h2.089L18 9.481 19.355 14h2.089l-2.1-7H22V5h-9V3h-2v2H2v2h2.656l-2.1 7h2.088L6 9.481 7.356 14h2.088l-2.1-7H11v1z" />
    </G>
  </Svg>
);

export default SvgComponent;
