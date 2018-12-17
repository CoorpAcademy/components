import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10.302 16.758A3.222 3.222 0 0 0 12 17.25 3.254 3.254 0 0 0 15.25 14c0-.624-.186-1.202-.492-1.697l-4.456 4.455zM12 10.75A3.254 3.254 0 0 0 8.75 14c0 .623.186 1.202.492 1.698l4.456-4.456A3.222 3.222 0 0 0 12 10.75z" />
      <Path d="M20 7h-8l-1.447-1.894A2 2 0 0 0 8.764 4H3a1 1 0 0 0-1 1v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm-8 11.75c-2.619 0-4.75-2.131-4.75-4.75S9.381 9.25 12 9.25s4.75 2.131 4.75 4.75-2.131 4.75-4.75 4.75z" />
    </G>
  </Svg>
);

export default SvgComponent;
