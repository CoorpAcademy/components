import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24.001v24.001H0z" />
    <G fill="currentColor">
      <Path d="M18 4c0-3-3.903-3-6-3S6 1 6 4v1h12V4zM18 10.913V6H6v4.913C7.114 10.595 9.536 10 12 10s4.885.595 6 .913z" />
      <Path d="M23 9h-4v2h1v2h-1a1 1 0 0 0-.684-.949C18.188 12.008 15.127 11 12 11s-6.188 1.008-6.316 1.051A1 1 0 0 0 5 13H4v-2h1V9H1v2h1v3a1 1 0 0 0 1 1h2v1a1 1 0 0 0 1 1h5v3H8v2h8v-2h-3v-3h5a1 1 0 0 0 1-1v-1h2a1 1 0 0 0 1-1v-3h1V9z" />
    </G>
  </Svg>
);

export default SvgComponent;
