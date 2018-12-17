import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 0c-1.594 0-3.07.837-4 2.08C8.07.837 6.594 0 5 0 2.243 0 0 2.243 0 5c0 5.491 8.124 10.632 8.471 10.848a.998.998 0 0 0 1.058 0C9.876 15.632 18 10.491 18 5c0-2.757-2.243-5-5-5zM17 19h6v2h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
