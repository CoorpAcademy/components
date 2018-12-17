import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      d="M16 2h-6C8.346 2 7 3.346 7 5v2H5c-1.103 0-2 .896-2 2v4c0 2.205 1.794 4 4 4h.006v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-4.186A2.995 2.995 0 0 0 19 14V5c0-1.654-1.346-3-3-3zM5 13V9h2v3h2V5c0-.551.449-1 1-1h6c.551 0 1 .449 1 1v9c0 .551-.449 1-1 1H7c-1.103 0-2-.897-2-2zm10.006 7h-6v-3h6v3z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
