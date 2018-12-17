import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 9c-4.411 0-8 3.589-8 8v5a1 1 0 0 0 1 1h3c1.103 0 2-.897 2-2v-2c0-1.104-.897-2-2-2H6c0-3.309 2.691-6 6-6s6 2.691 6 6h-2c-1.103 0-2 .896-2 2v2c0 1.103.897 2 2 2h3a1 1 0 0 0 1-1v-5c0-4.411-3.589-8-8-8zM8 19l.001 2H6v-2h2zm10 2h-2v-2h2v2zM8.237 6.708l1.505 1.318a3 3 0 0 1 4.501-.019l1.493-1.33a5.002 5.002 0 0 0-7.499.031z" />
      <Path d="M12 3c2.004 0 3.916.862 5.245 2.365l1.498-1.325A9.005 9.005 0 0 0 12 1a9.009 9.009 0 0 0-6.75 3.046l1.5 1.324A7.011 7.011 0 0 1 12 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
