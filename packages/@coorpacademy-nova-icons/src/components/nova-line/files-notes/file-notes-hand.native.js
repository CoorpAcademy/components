import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 17h-7.586l.293-.293a1 1 0 0 0 .188-1.154l-1-2a1 1 0 0 0-1.211-.501l-4.757 1.585A.998.998 0 0 0 5 14H1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h11a1 1 0 0 0 .8-.4l3-4A.999.999 0 0 0 20 17zM4 22H2v-6h2v6zm12.5-1H6v-4.279l4.494-1.497.29.579-1.49 1.49a.992.992 0 0 0-.285.707H9v1h9l-1.5 2zM20 1V0h-2v1h-1V0h-2v1h-3v11h11V1h-3zm1 9h-7V3h1v2h2V3h1v2h2V3h1v7z" />
    </G>
  </Svg>
);

export default SvgComponent;
