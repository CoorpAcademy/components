import React from "react";
import Svg, { Path, Circle, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .004h24v24H0z" />
    <Path fill="currentColor" d="M3 3h5v2H3zM3 9h5v2H3zM3 15h5v2H3z" />
    <Circle cx={13} cy={4} r={1} fill="currentColor" />
    <Circle cx={16} cy={4} r={1} fill="currentColor" />
    <Path
      d="M18 0H2a2 2 0 0 0-2 2v16c0 1.103.896 2 2 2h8v-2H2v-4h8v-2H2V8h15.999l-.001 2H20V2a2 2 0 0 0-2-2zm-.001 6H2V2h16l-.001 4z"
      fill="currentColor"
    />
    <G fill="currentColor">
      <Path d="M18 22c-1.077 0-2.064-.44-2.811-1.189L17 19h-5v5l1.762-1.761A5.938 5.938 0 0 0 18 24c3.309 0 6-2.691 6-6h-2c0 2.206-1.795 4-4 4zM22.24 13.761A5.941 5.941 0 0 0 18 12c-3.309 0-6 2.691-6 6h2c0-2.205 1.795-4 4-4 1.078 0 2.064.44 2.811 1.188L19 17h5v-5l-1.76 1.761z" />
    </G>
  </Svg>
);

export default SvgComponent;
