import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M18 16c0 .551-.449 1-1 1h-2c-.551 0-1-.449-1-1V7c0-1.654-1.346-3-3-3H8C6.346 4 5 5.346 5 7v1H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H7V7c0-.551.449-1 1-1h3c.551 0 1 .449 1 1v9c0 1.654 1.346 3 3 3h2c1.654 0 3-1.346 3-3v-6h-2v6z" />
      <Path d="M21 4h-4a2 2 0 0 0 0 4h1V7a1 1 0 1 1 2 0v1h1a2 2 0 0 0 0-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
