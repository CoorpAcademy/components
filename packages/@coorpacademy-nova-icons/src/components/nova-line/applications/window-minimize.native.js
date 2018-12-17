import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 6h18l-.002 10H22V2c0-1.103-.896-2-2-2H2C.897 0 0 .897 0 2v16c0 1.103.897 2 2 2h8v-2H2V6zm5-2V2h3v2H7zm13 0h-8V2h8v2zM5 2v2H2V2h3z" />
      <Path d="M23 18H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-1 4h-8v-2h8v2zM13 16v-5l-1.793 1.794-4.5-4.5-1.414 1.414 4.5 4.5L8 16z" />
    </G>
  </Svg>
);

export default SvgComponent;
