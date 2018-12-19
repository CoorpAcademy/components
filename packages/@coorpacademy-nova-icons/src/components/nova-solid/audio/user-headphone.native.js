import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 8.003h-.08c-.487-3.387-3.4-6-6.92-6s-6.433 2.613-6.92 6H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v-5c0-2.757 2.243-5 5-5s5 2.243 5 5v5h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z" />
      <Path d="M16 10.003c0-2.206-1.794-4-4-4s-4 1.794-4 4c0 2.205 1.794 4 4 4s4-1.795 4-4zM12 15.003c-4.71 0-8 2.467-8 6v1h16v-1c0-3.533-3.29-6-8-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
