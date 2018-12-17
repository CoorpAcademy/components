import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v2h20V2zM20 6H0v8c0 1.102.896 2 2 2h12.81A5.995 5.995 0 0 1 20 13V6zM8 13H3v-2h5v2zm2-3H3V8h7v2zm7 0h-4V8h4v2zM22 16c-1.104 0-2 1-2 2 0-1-.896-2-2-2s-2 .895-2 2c0 3 4 6 4 6s4-3 4-6a2 2 0 0 0-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
