import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M24 11h-3.102C20.434 8.72 18.414 7 16 7s-4.434 1.721-4.898 4H0v2h11.102c.465 2.279 2.484 4 4.898 4s4.434-1.721 4.898-4H24v-2zm-8 4c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
