import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M16 12H8a2 2 0 0 1 0-4h7.586l-1.293 1.293 1.414 1.414L19.414 7l-3.707-3.707-1.414 1.414L15.586 6H8c-2.205 0-4 1.795-4 4s1.795 4 4 4h8a2 2 0 0 1 0 4H4v2h12c2.205 0 4-1.795 4-4s-1.795-4-4-4z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
