import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M19.998 2h-16a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1v4l4-4h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-8 12.988s-5.145-3.74-5.145-6.514c0-2.632 4.001-3.775 5.145-.318 1.144-3.457 5.145-2.313 5.145.318 0 2.774-5.145 6.514-5.145 6.514z"
    />
  </Svg>
);

export default SvgComponent;
