import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7.293 9.3l-3.707 3.707 3.707 3.707L8.707 15.3l-2.293-2.293 2.293-2.293z" />
      <Path d="M2 2.004h10v4h4V10h2V4.59L13.414.004H2c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h8v-2H2v-18z" />
      <Path d="M18 12.004c-3.309 0-6 2.692-6 6 0 3.31 2.691 6 6 6s6-2.69 6-6c0-3.308-2.691-6-6-6zm-4 6c0-2.206 1.795-4 4-4 .739 0 1.424.215 2.02.567l-5.453 5.452A3.944 3.944 0 0 1 14 18.004zm4 4a3.965 3.965 0 0 1-2.02-.566l5.453-5.452A3.95 3.95 0 0 1 22 18.004c0 2.206-1.795 4-4 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
