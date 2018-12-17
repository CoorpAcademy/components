import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M6 2H5L4 7h3zM3 11h5v8H3zM3 8h5v2H3zM3 20h5v2H3zM13 2h-1l-1 5h3zM10 20h5v2h-5zM10 8h5v2h-5zM10 11h5v8h-5zM20 2h-1l-1 5h3zM17 8h5v2h-5zM17 20h5v2h-5zM17 11h5v8h-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
