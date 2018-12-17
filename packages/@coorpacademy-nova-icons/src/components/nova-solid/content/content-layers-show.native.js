import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      fill="currentColor"
      d="M21.406 6.62l-9-4a.999.999 0 0 0-.812 0l-9 4a.999.999 0 1 0 0 1.827l9 4a1.007 1.007 0 0 0 .812 0l9-4a.998.998 0 0 0 0-1.827z"
    />
    <Path
      fill="currentColor"
      d="M22 9.892l-10.018 4.552L2 10.284v2.166l9.615 4.008a1.02 1.02 0 0 0 .798-.012L22 12.089V9.892z"
    />
    <Path
      fill="currentColor"
      d="M22 13.892l-10.018 4.552L2 14.284v2.165l9.615 4.008a1.02 1.02 0 0 0 .798-.012L22 16.089v-2.197z"
    />
  </Svg>
);

export default SvgComponent;
