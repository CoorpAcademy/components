import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1 14H7v-2h4v2zm0-3H7v-2h4v2zm0-3H7V8h4v2zm4 6h-2V8h2l3 4-3 4z"
    />
  </Svg>
);

export default SvgComponent;
