import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13.099 11.696A7.96 7.96 0 0 1 18 10.01V4.595L13.414.009H2c-1.103 0-2 .896-2 2v18c0 1.102.897 2 2 2h9.079a7.957 7.957 0 0 1 .606-8.898l-1.392-1.392 1.414-1.414 1.392 1.391zM12 1.009l5 5h-5v-5zM7.707 16.305l-1.414 1.414-3.707-3.707 3.707-3.707 1.414 1.414-2.293 2.293 2.293 2.293z" />
      <Path d="M18 12.01c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm-4 6c0-2.206 1.794-4 4-4 .739 0 1.425.216 2.02.566l-5.453 5.453A3.957 3.957 0 0 1 14 18.01zm4 4a3.959 3.959 0 0 1-2.019-.566l5.452-5.452c.352.594.567 1.279.567 2.018 0 2.205-1.794 4-4 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
