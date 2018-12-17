import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M19.799 12A9.976 9.976 0 0 0 20 10c0-4.1-2.47-7.619-6-9.162V4h-3v3h3v3l-3 1-2 5-5-3V7l3-2V.46C2.943 1.734 0 5.523 0 10c0 5.523 4.477 10 10 10a9.963 9.963 0 0 0 7-2.865V14c0-1.1.9-2 2-2h.799zM19 14h2v6h-2z" />
      <Circle cx={20} cy={22} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
