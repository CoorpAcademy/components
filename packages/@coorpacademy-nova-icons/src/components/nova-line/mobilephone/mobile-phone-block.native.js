import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v-2H2v-2h8v-2H2V6h8l.001 4H12V2a2 2 0 0 0-2-2zm0 4H2V2h8v2zM18 12c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 2c.739 0 1.424.215 2.02.566l-5.453 5.453A3.95 3.95 0 0 1 14 18c0-2.205 1.795-4 4-4zm0 8a3.965 3.965 0 0 1-2.02-.566l5.453-5.453A3.95 3.95 0 0 1 22 18c0 2.205-1.795 4-4 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
