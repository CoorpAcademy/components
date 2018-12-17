import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002-.002h24.001V24H-.002z" />
    <G fill="currentColor">
      <Path d="M10.998 4.998v2h-1a1 1 0 0 0-1 1v1h6v-1a1 1 0 0 0-1-1h-1v-2c0-2.205-1.795-4-4-4h-5v2h5c1.104 0 2 .897 2 2z" />
      <Path d="M17.998 8.998c-1.17 0-2.3.345-3.289 1H9.287a5.926 5.926 0 0 0-3.289-1c-3.309 0-6 2.692-6 6 0 3.309 2.692 6 6 6 1.17 0 2.3-.344 3.289-1h5.422c.989.656 2.119 1 3.289 1 3.309 0 6-2.691 6-6 0-3.308-2.691-6-6-6zm-9 7h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2zm8.999-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-1.999 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1.999 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm2.001-2a1 1 0 1 1-.002-2 1 1 0 0 1 .002 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
