import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M21.707 15.293l-11-11A1.002 1.002 0 0 0 10 4H3a1 1 0 0 0-1 1v7c0 .266.105.519.293.707l11 11a.997.997 0 0 0 1.414 0l7-7a.999.999 0 0 0 0-1.414zM7 11a2 2 0 1 1-.001-3.999A2 2 0 0 1 7 11z"
    />
    <Path
      fill="currentColor"
      d="M22.293 12.707L11.586 2H5V0h7c.266 0 .519.105.707.293l11 11-1.414 1.414z"
    />
  </Svg>
);

export default SvgComponent;
