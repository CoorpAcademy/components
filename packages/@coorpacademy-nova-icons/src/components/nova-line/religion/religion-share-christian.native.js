import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M20 17h-7.586l.293-.293a1 1 0 0 0 .188-1.154l-1-2a.999.999 0 0 0-1.211-.501l-4.757 1.585A.997.997 0 0 0 5 14H1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h11a1 1 0 0 0 .8-.4l3-4A.999.999 0 0 0 20 17zM2 22v-6h2v6H2zm14.5-1H6v-4.279l4.494-1.498.29.58-1.49 1.49A1 1 0 0 0 10 19h8l-1.5 2zM19 5V2h-2v3h-3v2h3v7h2V7h3V5z" />
    </G>
  </Svg>
);

export default SvgComponent;
