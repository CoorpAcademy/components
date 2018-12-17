import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 10h2V7h2l-3-3-3 3h2zM9 16H6v-2l-3 3 3 3v-2h3zM15 16v2h3v2l3-3-3-3v2z" />
      <Path d="M23 11h-5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v9H1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1zm-7-8v8H8V3h8zM2 13h9v8H2v-8zm20 8h-9v-8h9v8z" />
    </G>
  </Svg>
);

export default SvgComponent;
