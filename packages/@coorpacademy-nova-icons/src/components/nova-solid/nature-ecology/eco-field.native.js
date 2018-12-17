import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 3h2v2h-2zM16.242 4.343l1.415 1.414-1.415 1.415-1.414-1.415zM17 9h2v2h-2zM7.758 4.344l1.414 1.414-1.414 1.414-1.414-1.414zM5 9h2v2H5zM3 13a1 1 0 0 0-1 1v7.333L7 13H3zM13 13l1 10h4l-3-10zM21 13h-4l5 8.333V14a1 1 0 0 0-1-1zM6 23h4l1-10H9zM8 10c0 .732.211 1.411.555 2h6.891A3.962 3.962 0 0 0 16 10a4 4 0 0 0-8 0z" />
    </G>
  </Svg>
);

export default SvgComponent;
