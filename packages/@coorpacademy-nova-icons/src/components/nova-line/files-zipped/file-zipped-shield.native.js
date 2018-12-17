import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6 4h2v2H6zM4 6h2v2H4zM6 8h2v2H6zM4 10h2v2H4z" />
      <Path d="M2 2h2v2h2V2h8l.001 7H16V2c0-1.104-.897-2-2-2H2C.897 0 0 .896 0 2v16c0 1.103.897 2 2 2h8v-2H2V2z" />
      <Path d="M12 11v7c0 3.813 3.796 5.579 5.804 5.98l.196.04.196-.04C20.204 23.579 24 21.813 24 18v-7H12zm10 7c0 2.763-3.153 3.757-3.998 3.974C17.175 21.757 14 20.749 14 18v-5h8v5z" />
      <Path d="M17 20h2v-2h2v-2h-2v-2h-2v2h-2v2h2z" />
    </G>
  </Svg>
);

export default SvgComponent;
