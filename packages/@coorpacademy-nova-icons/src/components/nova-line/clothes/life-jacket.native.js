import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24.002h-24z" />
    <Path
      d="M21 11c-1.104 0-2-.897-2-2V3a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v6c0 1.103-.896 2-2 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1zM11 4h2v3c0 .551-.449 1-1 1s-1-.449-1-1V4zM7 9V4h2v3c0 1.654 1.346 3 3 3s3-1.346 3-3V4h2v5a4.01 4.01 0 0 0 3 3.874V13h-2a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1h-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H4v-.126A4.01 4.01 0 0 0 7 9zm11 6h2v1h-2v-1zm-2-1v3h-1v-3h1zm-5 1h2v1h-2v-1zm-2-1v3H8v-3h1zm-3 2H4v-1h2v1zm-2 4v-2h2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1h2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1h2v2H4z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
