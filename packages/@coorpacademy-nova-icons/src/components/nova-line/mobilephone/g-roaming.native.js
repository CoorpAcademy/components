import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16.5 11L21 7h-3V3h-3v4h-3zM7.5 3L3 7h3v4h3V7h3zM17 21h-2c-1.103 0-2-.896-2-2v-4c0-1.104.897-2 2-2h4v2h-4v4h2v-1h-1v-2h3v3c0 1.104-.897 2-2 2zM10 21H5v-2h4v-1H6a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h5v2H7v1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1z"
    />
  </Svg>
);

export default SvgComponent;
