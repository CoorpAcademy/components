import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17 22h6l-2-3v-7c0-1.104-.897-2-2-2H5c-1.103 0-2 .896-2 2v7l-2 3h6l-2-3v-7h2v6a1 1 0 0 0 1 1h2l-1 3h6l-1-3h2a1 1 0 0 0 1-1v-6h2v7l-2 3zm-3-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM17 7A5 5 0 1 0 7 7v2h10V7zm-5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
