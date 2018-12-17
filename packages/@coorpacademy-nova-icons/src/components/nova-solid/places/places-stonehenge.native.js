import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M4 4h16v4H4zM7 9h4v13H7zM13 9h4v13h-4zM19 14h4v8h-4zM1 14h4v8H1z" />
    </G>
  </Svg>
);

export default SvgComponent;
