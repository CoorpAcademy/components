import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 7h-3V3h-3v4h-3l4.5 4zM3 7h3v4h3V7h3L7.5 3zM13 15v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-3h-3v2h1v1h-2v-4h4v-2h-4a2 2 0 0 0-2 2zM10 14a1 1 0 0 0-1-1H6c-.459 0-.859.312-.971.758l-1 4A.998.998 0 0 0 5 19h3v2h2v-2h1v-2h-1v-3zm-2 3H6.281l.5-2H8v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
