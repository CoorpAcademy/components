import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20.345 17H1.655L.367 20.734c-.186.558-.11 1.13.208 1.571.318.442.837.695 1.425.695h18c.588 0 1.107-.253 1.425-.694.318-.441.394-1.014.207-1.571L20.345 17zM13 21H9v-2h4v2zM21 3V2a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5l3 1V2l-3 1z"
    />
    <Path
      fill="currentColor"
      d="M14 6V5H3a1 1 0 0 0-1 1v10h18V8h-4c-1.103 0-2-.897-2-2zm-3 1a1.75 1.75 0 1 1 0 3.5A1.75 1.75 0 0 1 11 7zm-2.625 7c0-1.611 1.014-2.625 2.625-2.625 1.61 0 2.625 1.014 2.625 2.625h-5.25z"
    />
  </Svg>
);

export default SvgComponent;
