import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M22.001 6h-20a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-10.5 7.5c0 1.654-1.346 3-3 3s-3-1.346-3-3h2a1.001 1.001 0 0 0 2 0v-5h2v5zm7-3h-3.5a.5.5 0 0 0 0 1h1c1.379 0 2.5 1.121 2.5 2.5 0 1.378-1.121 2.5-2.5 2.5h-3.5v-2h3.5a.5.5 0 0 0 0-1h-1a2.503 2.503 0 0 1-2.5-2.5c0-1.379 1.121-2.5 2.5-2.5h3.5v2z"
    />
  </Svg>
);

export default SvgComponent;
