import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <Path
      fill="currentColor"
      d="M23.971 15.758l-1-4A1.001 1.001 0 0 0 22 11h-3V9h3V7h-3V6h3V4h-3V3h-2v1H7V3H5v1H2v2h3v1H2v2h3v2H2c-.459 0-.859.312-.971.758l-1 4A1 1 0 0 0 1 17h2v4h2v-4h14v4h2v-4h2a1 1 0 0 0 .971-1.242zM7 6h10v1H7V6zm0 3h10v2H7V9z"
    />
  </Svg>
);

export default SvgComponent;
