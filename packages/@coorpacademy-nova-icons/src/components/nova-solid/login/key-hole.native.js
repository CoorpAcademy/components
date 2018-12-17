import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c5.522 0 10-4.478 10-10S17.522 2 12 2zm1.378 10.65L14 17h-4l.622-4.35A2.988 2.988 0 0 1 9 10a3.001 3.001 0 0 1 6 0 2.988 2.988 0 0 1-1.622 2.65z"
    />
  </Svg>
);

export default SvgComponent;
