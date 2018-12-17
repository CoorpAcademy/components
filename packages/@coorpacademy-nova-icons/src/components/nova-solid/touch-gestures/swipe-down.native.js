import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10.5 9.067H2v7h8.5a3.5 3.5 0 1 0 0-7zm0 5H9v-3h1.5a1.5 1.5 0 1 1 0 3z" />
      <Path d="M19 12.567c0-3.321-1.035-6.488-2.994-9.157l-1.612 1.182A13.396 13.396 0 0 1 17 12.567c0 2.111-.496 4.19-1.438 6.062L14 17.067v5h5l-1.962-1.961A15.5 15.5 0 0 0 19 12.567z" />
    </G>
  </Svg>
);

export default SvgComponent;
