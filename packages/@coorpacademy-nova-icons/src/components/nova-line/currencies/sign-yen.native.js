import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M13 11.261L17.588 3h-2.287L12 8.942 8.699 3H6.412L11 11.261V12H8v2h3v1H8v2h3v4h2v-4h3v-2h-3v-1h3v-2h-3z"
    />
  </Svg>
);

export default SvgComponent;
