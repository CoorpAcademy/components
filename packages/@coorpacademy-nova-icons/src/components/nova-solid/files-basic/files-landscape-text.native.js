import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path fill="currentColor" d="M18 21H3c-1.103 0-2-.897-2-2V6h2v13h15v2z" />
    <Path
      fill="currentColor"
      d="M19.414 3H7c-1.103 0-2 .898-2 2v10c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6.586L19.414 3zM16 9.4h-1.2V8.2h-1.2v3.6h1.2V13h-3.6v-1.2h1.2V8.2h-1.2v1.2H10V7h6v2.4zM18 8V4l4 4h-4z"
    />
  </Svg>
);

export default SvgComponent;
