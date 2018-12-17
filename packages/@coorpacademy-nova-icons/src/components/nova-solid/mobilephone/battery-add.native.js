import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <Path
      fill="currentColor"
      d="M21 8h-2V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-7 5h-3v3H9v-3H6v-2h3V8h2v3h3v2z"
    />
  </Svg>
);

export default SvgComponent;
