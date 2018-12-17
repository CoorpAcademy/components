import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7.293 9.3l-3.707 3.707 3.707 3.707L8.707 15.3l-2.293-2.293 2.293-2.293z" />
      <Path d="M2 2.004h10v4h4V9h2V4.59L13.414.004H2c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h8v-2H2v-18z" />
      <Path d="M12 11.004v7c0 3.813 3.796 5.579 5.804 5.98l.196.04.196-.04c2.008-.401 5.804-2.167 5.804-5.98v-7H12zm10 7c0 2.763-3.153 3.757-3.998 3.973-.827-.216-4.002-1.224-4.002-3.973v-5h8v5z" />
      <Path d="M17 20.004h2v-2h2v-2h-2v-2h-2v2h-2v2h2z" />
    </G>
  </Svg>
);

export default SvgComponent;
