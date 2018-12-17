import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <Path
      fill="currentColor"
      d="M12 2C6.487 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.18 6.493l-3.456 2.073a3.994 3.994 0 0 0-2.289-2.29l2.073-3.456a8.05 8.05 0 0 1 3.672 3.673zM8.493 4.82l2.074 3.456a3.987 3.987 0 0 0-2.29 2.29L4.821 8.493A8.05 8.05 0 0 1 8.493 4.82zM4.821 15.508l3.456-2.075a3.987 3.987 0 0 0 2.29 2.29l-2.074 3.455a8.044 8.044 0 0 1-3.672-3.67zm10.687 3.671l-2.074-3.455a3.988 3.988 0 0 0 2.29-2.289l3.456 2.074a8.053 8.053 0 0 1-3.672 3.67z"
    />
  </Svg>
);

export default SvgComponent;
