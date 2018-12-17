import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M18.001 13c.825 0 1.5.676 1.5 1.5s-.675 1.5-1.5 1.5-1.5-.676-1.5-1.5.675-1.5 1.5-1.5zM20.001 22h-4v-3a2 2 0 0 1 4 0v3zM12.001 13c.825 0 1.5.676 1.5 1.5s-.675 1.5-1.5 1.5-1.5-.676-1.5-1.5.675-1.5 1.5-1.5zM14.001 22h-4v-3a2 2 0 0 1 4 0v3zM6.001 13c.825 0 1.5.676 1.5 1.5s-.675 1.5-1.5 1.5-1.5-.676-1.5-1.5.675-1.5 1.5-1.5zM8.001 22h-4v-3a2 2 0 0 1 4 0v3zM21.376 11.781l-9.375-7.5-9.376 7.5-1.249-1.562 10.625-8.5 10.624 8.5z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
