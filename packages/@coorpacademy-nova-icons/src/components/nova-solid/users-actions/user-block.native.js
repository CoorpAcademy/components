import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18.002.006c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 2c.739 0 1.425.216 2.02.566l-5.453 5.453a3.96 3.96 0 0 1-.566-2.02 4.002 4.002 0 0 1 3.999-3.999zm0 8a3.952 3.952 0 0 1-2.018-.566l5.452-5.452c.352.595.566 1.279.566 2.019a4.004 4.004 0 0 1-4 3.999zM8.002 16.006c2.205 0 4-1.795 4-4s-1.795-4-4-4-4 1.795-4 4 1.795 4 4 4zM8.002 17.006c-4.711 0-8 2.467-8 6v1h16v-1c0-3.533-3.289-6-8-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
