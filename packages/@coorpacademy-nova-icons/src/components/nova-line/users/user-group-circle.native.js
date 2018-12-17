import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M18.001 15.65v2.029c1.241.353 2 .813 2 1.32 0 1.105-3.581 2-8 2s-8-.895-8-2c0-.507.759-.968 2-1.32v-2.03c-3.008.714-5 1.946-5 3.351 0 2.21 4.925 4 11 4 6.074 0 11-1.79 11-4 0-1.405-1.992-2.637-5-3.35zM17.001 5c.825 0 1.5.676 1.5 1.5s-.675 1.5-1.5 1.5-1.5-.676-1.5-1.5.675-1.5 1.5-1.5zM19.001 15h-4v-4a2 2 0 0 1 4 0v4zM12.001 3c.825 0 1.5.676 1.5 1.5s-.675 1.5-1.5 1.5-1.5-.676-1.5-1.5.675-1.5 1.5-1.5zM14.001 13h-4V9a2 2 0 0 1 4 0v4zM7.001 5c.825 0 1.5.676 1.5 1.5S7.826 8 7.001 8s-1.5-.676-1.5-1.5.675-1.5 1.5-1.5zM9.001 15h-4v-4a2 2 0 0 1 4 0v4z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
