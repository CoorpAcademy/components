import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M4 16h5v2H4z" />
      <Circle cx={13} cy={17} r={1.25} />
      <Path d="M23 7a2 2 0 0 0-4 0c0 .738.404 1.376 1 1.723V16h-2V3a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-3h3a1 1 0 0 0 1-1V8.723c.596-.347 1-.985 1-1.723zM3 7h3v5H3V7zm5 0h3v5H8V7zm5 0h3v5h-3V7zM3 4h13v1H3V4zm13 16H3v-6h13v6z" />
    </G>
  </Svg>
);

export default SvgComponent;
