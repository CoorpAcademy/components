import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      d="M20 22.001H3a1 1 0 0 1-1-1v-18a1 1 0 0 1 1-1h17a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-16-2h15v-16H4v16z"
      fill="currentColor"
    />
    <Path
      fill="currentColor"
      d="M6 6.001h11v3H6zM6 10.001h5v2H6zM6 13.001h5v2H6zM6 16.001h5v2H6zM12 10.001h5v2h-5zM12 13.001h5v2h-5zM12 16.001h5v2h-5z"
    />
  </Svg>
);

export default SvgComponent;
