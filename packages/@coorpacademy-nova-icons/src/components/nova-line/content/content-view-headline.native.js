import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .003h24v24H0z" />
    <Path
      d="M19 8.001H5c-1.104 0-2-.897-2-2v-2c0-1.102.896-2 2-2h14c1.104 0 2 .898 2 2v2c0 1.103-.896 2-2 2zm-14-4v2h14v-2H5zM19 15.001H5c-1.104 0-2-.897-2-2v-2c0-1.102.896-2 2-2h14c1.104 0 2 .898 2 2v2c0 1.103-.896 2-2 2zm-14-4v2h14v-2H5zM19 22.001H5c-1.104 0-2-.897-2-2v-2c0-1.103.896-2 2-2h14c1.104 0 2 .897 2 2v2c0 1.103-.896 2-2 2zm-14-4v2h14v-2H5z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
