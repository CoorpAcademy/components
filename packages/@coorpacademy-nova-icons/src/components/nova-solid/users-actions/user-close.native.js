import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8.002 16.006c2.205 0 4-1.795 4-4s-1.795-4-4-4-4 1.795-4 4 1.795 4 4 4zM8.002 17.006c-4.711 0-8 2.467-8 6v1h16v-1c0-3.533-3.289-6-8-6z" />
    </G>
    <Path
      fill="currentColor"
      d="M21.709 4.713l-1.414-1.414-2.293 2.293-2.292-2.293-1.415 1.414 2.293 2.293-2.293 2.293 1.415 1.414 2.292-2.293 2.293 2.293 1.414-1.414-2.292-2.293z"
    />
  </Svg>
);

export default SvgComponent;
