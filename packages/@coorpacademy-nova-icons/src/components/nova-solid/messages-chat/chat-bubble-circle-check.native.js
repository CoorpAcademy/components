import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M11.998 3c-5.514 0-10 4.037-10 9 0 1.735.541 3.392 1.573 4.836L.998 21h11c5.514 0 10-4.037 10-9s-4.486-9-10-9zm-.687 13.711L7.305 14.04l1.387-2.08 1.993 1.329 4.296-6.016 2.034 1.453-5.704 7.985z"
    />
  </Svg>
);

export default SvgComponent;
