import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.003h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 18.5c0-2.086.754-3.992 2-5.472V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8c.047 0 .092-.011.139-.014A8.458 8.458 0 0 1 10 18.5zM2 16V4h8v12H2zM21.5 19c-.812 0-1.529.396-1.986.998l-2.562-1.024c.029-.155.048-.312.048-.474s-.019-.319-.048-.474l2.562-1.024A2.492 2.492 0 0 0 21.5 18c1.379 0 2.5-1.121 2.5-2.5S22.879 13 21.5 13 19 14.121 19 15.5c0 .03.008.059.009.089l-2.78 1.112A2.488 2.488 0 0 0 14.5 16c-1.379 0-2.5 1.121-2.5 2.5s1.121 2.5 2.5 2.5c.672 0 1.279-.269 1.729-.701l2.78 1.112c-.001.03-.009.059-.009.089 0 1.379 1.121 2.5 2.5 2.5s2.5-1.121 2.5-2.5-1.121-2.5-2.5-2.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
