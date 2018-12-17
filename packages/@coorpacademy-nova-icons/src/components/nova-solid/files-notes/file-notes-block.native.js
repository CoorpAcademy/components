import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10.302 17.759A3.222 3.222 0 0 0 12 18.25 3.254 3.254 0 0 0 15.25 15c0-.624-.186-1.202-.492-1.697l-4.456 4.456zM12 11.75A3.254 3.254 0 0 0 8.75 15c0 .623.186 1.202.492 1.698l4.456-4.456A3.222 3.222 0 0 0 12 11.75z" />
      <Path d="M18 2v3h-2V2h-3v3h-2V2H8v3H6V2H3v20h18V2h-3zm-6 17.75c-2.619 0-4.75-2.131-4.75-4.75s2.131-4.75 4.75-4.75 4.75 2.131 4.75 4.75-2.131 4.75-4.75 4.75z" />
    </G>
  </Svg>
);

export default SvgComponent;
