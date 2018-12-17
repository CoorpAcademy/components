import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M6 8H1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1zM2 6h3V3H2v3zM14 8H9a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1zm-4-2h3V3h-3v3zM22 8h-5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1zm-4-2h3V3h-3v3zM6 16H1a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1zm-4-2h3v-3H2v3zM14 16H9a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1zm-4-2h3v-3h-3v3zM14 24H9a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1zm-4-2h3v-3h-3v3zM22 16h-5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1zm-4-2h3v-3h-3v3z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
