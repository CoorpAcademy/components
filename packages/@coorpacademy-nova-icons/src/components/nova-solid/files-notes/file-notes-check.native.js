import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M18 2v3h-2V2h-3v3h-2V2H8v3H6V2H3v20h18V2h-3zm-7 15.414l-3.707-3.708 1.414-1.413L11 14.586l4.293-4.293 1.414 1.413L11 17.414z"
    />
  </Svg>
);

export default SvgComponent;
