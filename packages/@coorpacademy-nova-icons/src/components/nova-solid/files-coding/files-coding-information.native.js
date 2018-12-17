import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13.099 11.696A7.96 7.96 0 0 1 18 10.01V4.595L13.414.009H2c-1.103 0-2 .897-2 2v18c0 1.102.897 2 2 2h9.079a7.957 7.957 0 0 1 .606-8.898l-1.392-1.392 1.414-1.414 1.392 1.391zM12 1.009l5 5h-5v-5zM7.707 16.305l-1.414 1.414-3.707-3.707 3.707-3.707 1.414 1.414-2.293 2.293 2.293 2.293z" />
      <Path d="M18 12.009c-3.309 0-6 2.694-6 6 0 3.31 2.691 6 6 6 3.308 0 6-2.69 6-6 0-3.306-2.692-6-6-6zm1 10h-2v-4h2v4zm-1-5.007a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
