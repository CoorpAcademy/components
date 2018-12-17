import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20.295 3.298l-2.293 2.293V.005h-2v5.586L13.71 3.298l-1.415 1.414 4.707 4.707 4.707-4.707z"
    />
    <G fill="currentColor">
      <Path d="M8.002 16.006c2.206 0 4-1.795 4-4s-1.794-4-4-4-4 1.795-4 4 1.795 4 4 4zM8.002 17.006c-4.71 0-8 2.467-8 6v1h16v-1c0-3.533-3.289-6-8-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
