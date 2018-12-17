import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 9c0-3.86 3.14-7 7-7 3.859 0 7 3.14 7 7h2c0-4.962-4.037-9-9-9S0 4.038 0 9s4.038 9 9 9c.338 0 .671-.022 1-.059V15.92c-.328.047-.66.08-1 .08-3.86 0-7-3.14-7-7z" />
      <Path d="M10 4H8v5.535l3 2V9.132l-1-.667zM12 11v7c0 3.813 3.796 5.579 5.804 5.98l.196.04.196-.04C20.204 23.579 24 21.813 24 18v-7H12zm10 7c0 2.763-3.153 3.757-3.998 3.974C17.175 21.757 14 20.749 14 18v-5h8v5z" />
      <Path d="M17 20h2v-2h2v-2h-2v-2h-2v2h-2v2h2z" />
    </G>
  </Svg>
);

export default SvgComponent;
