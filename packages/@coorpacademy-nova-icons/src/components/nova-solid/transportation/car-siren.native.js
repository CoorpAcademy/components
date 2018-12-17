import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001-.002h24v24h-24z" />
    <G fill="currentColor">
      <Circle cx={17} cy={19} r={2} />
      <Circle cx={8} cy={19} r={2} />
      <Path d="M16 6a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2h4V6zM19.444 1.168l1.11 1.664-3 2-1.11-1.663zM18 6h4v2h-4zM8.555 1.168l3 2-1.11 1.664-3-2zM6 6h4v2H6zM20 13l-2-4h-8l-2 4H4a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h2a3 3 0 0 1 6 0h3a3 3 0 0 1 6 0h1a1 1 0 0 0 1-1v-3a2 2 0 0 0-2-2zm-6 0h-4l1-2h3v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
