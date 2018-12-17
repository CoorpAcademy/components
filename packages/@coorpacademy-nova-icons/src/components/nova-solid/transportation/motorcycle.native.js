import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001-.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M12 13a2 2 0 0 0-2 2v6a2 2 0 0 0 4 0v-6a2 2 0 0 0-2-2z" />
      <Path d="M15.594 6H20V4h-4c0-1-2-2-4-2S8 3 8 4H4v2h4.406c.309.846.812 1.716 1.564 2.301A7.003 7.003 0 0 0 5 15v4a1 1 0 0 0 1 1h3v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6h3a1 1 0 0 0 1-1v-4a7.002 7.002 0 0 0-4.971-6.699c.752-.585 1.256-1.455 1.565-2.301zM12 4a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 12 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
