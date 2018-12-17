import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 4h-2a2 2 0 0 0-4 0H8v3h8V4z" />
      <Path d="M19 5h-1v3H6V5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-7 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1-3.146V17h-2v-2h1c.827 0 1.5-.673 1.5-1.5S12.827 12 12 12s-1.5.673-1.5 1.5h-2c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5a3.505 3.505 0 0 1-2.5 3.354z" />
    </G>
  </Svg>
);

export default SvgComponent;
