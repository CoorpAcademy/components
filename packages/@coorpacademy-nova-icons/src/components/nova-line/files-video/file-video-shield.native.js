import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 2h10v4h4v3.003l2 .001V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h8v-2H2V2z" />
      <Path d="M6 17l4-2.286v-3.428L6 9zM12 11v7c0 3.813 3.796 5.579 5.804 5.98l.196.04.196-.04C20.204 23.579 24 21.813 24 18v-7H12zm10 7c0 2.763-3.153 3.757-3.998 3.974C17.175 21.757 14 20.749 14 18v-5h8v5z" />
      <Path d="M17 20h2v-2h2v-2h-2v-2h-2v2h-2v2h2z" />
    </G>
  </Svg>
);

export default SvgComponent;
