import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M20 17h-7.586l.293-.293a1 1 0 0 0 .188-1.154l-1-2a1.001 1.001 0 0 0-1.211-.501l-4.757 1.585A.998.998 0 0 0 5 14H1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h11a1 1 0 0 0 .8-.4l3-4A.999.999 0 0 0 20 17zM4 22H2v-6h2v6zm12.5-1H6v-4.279l4.494-1.497.29.579-1.49 1.49A1 1 0 0 0 10 19h8l-1.5 2zM11 8v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8l-2-2v4h-4V6l-2 2z" />
      <Path d="M15 2.414l5.293 5.292 1.414-1.414-6-6a.999.999 0 0 0-1.414 0l-6 6 1.414 1.414L15 2.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
