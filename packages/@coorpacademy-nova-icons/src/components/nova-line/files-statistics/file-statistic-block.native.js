import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 15.004H7v-7H5v7H4v2h6v-5H8z" />
      <Path d="M2 2.002h10v4h4v4.007h2V4.587L13.414.002H2c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h8v-2H2v-18z" />
      <Path d="M18 12.002c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm-4 6c0-2.206 1.795-4 4-4 .739 0 1.424.214 2.02.566l-5.453 5.452A3.944 3.944 0 0 1 14 18.002zm4 4a3.965 3.965 0 0 1-2.02-.566l5.453-5.454c.352.596.567 1.281.567 2.02 0 2.206-1.795 4-4 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
