import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      d="M12 12.533c-.139 0-.277-.029-.406-.086l-9-4a.998.998 0 0 1 0-1.827l9-4c.259-.115.554-.115.813 0l9 4a.998.998 0 0 1-.001 1.827l-9 4a1.003 1.003 0 0 1-.406.086zm-6.537-5L12 10.439l6.537-2.906L12 4.627 5.463 7.533z"
      fill="currentColor"
    />
    <Path
      d="M22 9.892l-10.018 4.552L2 10.284v2.166l9.615 4.008a1.02 1.02 0 0 0 .798-.012L22 12.089V9.892z"
      fill="currentColor"
    />
    <Path
      d="M22 13.892l-10.018 4.552L2 14.284v2.166l9.615 4.008a1.02 1.02 0 0 0 .798-.012L22 16.089v-2.197z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
