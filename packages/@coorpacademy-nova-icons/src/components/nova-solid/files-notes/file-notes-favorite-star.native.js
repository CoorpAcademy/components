import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M18 2v3h-2V2h-3v3h-2V2H8v3H6V2H3v20h18V2h-3zm-2.5 16L12 15.502 8.5 18l1.5-4.002L7 12h3.5l1.507-4 1.493 4H17l-3 1.998L15.5 18z"
    />
  </Svg>
);

export default SvgComponent;
