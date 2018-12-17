import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M17 19h3.857c.084-.321.143-.652.143-1v-1c0-2.205-1.795-4-4-4v6zM3.185 20A2.993 2.993 0 0 0 6 22h11c1.474 0 2.75-.81 3.443-2H3.185zM16 13h-2c-.343 0-1.17-.002-1.646-1H7v-1h5.067A6.815 6.815 0 0 1 12 10V9H7V8h5V6H7V5h5V3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v16h13v-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
