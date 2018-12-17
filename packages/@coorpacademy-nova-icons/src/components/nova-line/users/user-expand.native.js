import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.001 2l1.793 1.793-2.5 2.5 1.414 1.414 2.5-2.5L22.001 7V2zM7.001 2h-5v5l1.793-1.793 2.5 2.5 1.414-1.414-2.5-2.5zM17.708 16.293l-1.414 1.414 2.5 2.5L17.001 22h5v-5l-1.793 1.793zM6.294 16.293l-2.5 2.5L2.001 17v5h5l-1.793-1.793 2.5-2.5z" />
    </G>
    <Path
      d="M8.001 16c0-2.301 1.449-3.75 3.75-3.75s3.75 1.449 3.75 3.75h-7.5z"
      fill="currentColor"
    />
    <Circle cx={11.751} cy={8.5} r={2.5} fill="currentColor" />
  </Svg>
);

export default SvgComponent;
