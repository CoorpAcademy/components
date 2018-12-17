import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M2.006 18h19.987l-1.273-4H3.279l-1.273 4zM16 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM19 5.001h-2V2H7v3.001H5v-5h14zM22 9V7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2H1v2h1v1a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1h1V9h-1zM21.882 19.529A1.001 1.001 0 0 0 21 19H3a1.002 1.002 0 0 0-.832 1.554l2 3A.998.998 0 0 0 5 24h14c.334 0 .646-.167.832-.445l2-3a.998.998 0 0 0 .05-1.026z"
    />
  </Svg>
);

export default SvgComponent;
