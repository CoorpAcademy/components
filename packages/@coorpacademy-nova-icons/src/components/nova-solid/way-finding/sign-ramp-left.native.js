import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M4 9v13h18zM14 9.175l5.349 4.584 1.302-1.518L15.703 8H18V6h-6v6h2z" />
    </G>
  </Svg>
);

export default SvgComponent;
