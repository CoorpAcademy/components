import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0h24v24.001h-24z" />
    <Path
      d="M20 14v2h-1V7h1V5h-1a1 1 0 1 0-2 0h-1a1 1 0 1 0-2 0h-1a1 1 0 1 0-2 0h-1a1 1 0 1 0-2 0H7v2h1v9H5v-1h1a1 1 0 1 0 0-2H5v-1H3v1H2a1 1 0 1 0 0 2h1v5h2v-2h3v2h2v-2h1a1 1 0 1 0 2 0h1a1 1 0 1 0 2 0h1v2h2v-2h1v2h2v-6h-2zm-10 2V7h1v9h-1zm3 0V7h1v9h-1zm3 0V7h1v9h-1z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
