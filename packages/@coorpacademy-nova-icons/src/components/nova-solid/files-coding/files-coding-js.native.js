import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16.414 1.007H5c-1.103 0-2 .896-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.593l-4.586-4.586zm-5.414 16c0 1.654-1.346 3-3 3s-3-1.346-3-3h2a1.001 1.001 0 0 0 2 0v-5h2v5zm7-3h-3.5a.5.5 0 0 0 0 1h1c1.379 0 2.5 1.121 2.5 2.5 0 1.378-1.121 2.5-2.5 2.5H12v-2h3.5a.5.5 0 0 0 0-1h-1a2.503 2.503 0 0 1-2.5-2.5c0-1.379 1.121-2.5 2.5-2.5H18v2zm-3-7v-5l5 5h-5z"
    />
  </Svg>
);

export default SvgComponent;
