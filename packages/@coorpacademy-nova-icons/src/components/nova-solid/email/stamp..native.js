import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M22 5V4c0-1.103-.896-2-2-2h-1v2h-2V2h-2v2h-2V2h-2v2H9V2H7v2H5V2H4c-1.103 0-2 .897-2 2v1h2v2H2v2h2v2H2v2h2v2H2v2h2v2H2v1c0 1.104.897 2 2 2h1v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h1a2 2 0 0 0 2-2v-1h-2v-2h2v-2h-2v-2h2v-2h-2V9h2V7h-2V5h2zM9.5 7a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 9.5 7zM6 17l2.863-4.594 1.5 2.406 3.111-4.989L17.947 17H6z"
    />
  </Svg>
);

export default SvgComponent;
