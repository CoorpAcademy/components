import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002-.001h24.001V24H-.002z" />
    <G fill="currentColor">
      <Path d="M12 2.133l-8 8 16-4s-2-5-8-4zM20.615 8.212a.997.997 0 0 0-.857-.182l-16 4A.999.999 0 0 0 3 13v2a1 1 0 0 0 1 1h1c.551 0 1 .449 1 1 0 .551-.449 1-1 1H4a1 1 0 0 0-1 1v2a1.001 1.001 0 0 0 1.242.971l16-4c.446-.112.758-.512.758-.971V9c0-.308-.143-.598-.385-.788zM10 17a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm2-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 3a2 2 0 1 1 .001-4.001A2 2 0 0 1 16 17z" />
    </G>
  </Svg>
);

export default SvgComponent;
