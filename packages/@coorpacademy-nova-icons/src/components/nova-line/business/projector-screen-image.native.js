import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 7V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v10H2v2h9v2h2v-2h9v-2h-1V8a1 1 0 0 0 1-1zM4 5h16v1H4V5zm15 13H5V8h14v10z" />
      <Path d="M18 17v-2h-1.279L14.95 9.684a1.001 1.001 0 0 0-1.899 0l-1.354 4.06-.865-1.299c-.371-.556-1.293-.556-1.664 0L7.465 15H6v2h12z" />
      <Circle cx={8} cy={10} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
