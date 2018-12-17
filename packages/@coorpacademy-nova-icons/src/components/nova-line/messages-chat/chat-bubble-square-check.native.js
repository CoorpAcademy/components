import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M2.998 24v-4h-1c-1.104 0-2-.897-2-2V9a2 2 0 0 1 2-2h9v2h-9v9h3v2l2.666-2h7.334v-6h2v6c0 1.103-.896 2-2 2H8.332l-5.334 4zM15.998 9.414l-3.707-3.707 1.414-1.414 2.293 2.293 4.293-4.293 1.414 1.414z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
