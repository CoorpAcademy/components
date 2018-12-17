import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 15a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
      <Path d="M9 10h2v4H9zM13 10h2v4h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
