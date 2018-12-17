import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24.001v24.002H.001z" />
    <Path
      fill="currentColor"
      d="M18.999 5.998c-3.44 0-6.174-3.565-6.201-3.601-.378-.5-1.22-.5-1.598 0-.027.037-2.761 3.601-6.201 3.601a1 1 0 0 0-1 1v7c0 3.807 6.763 7.48 7.533 7.885.147.076.307.115.467.115.16 0 .32-.039.467-.115.771-.405 7.533-4.078 7.533-7.885v-7a1 1 0 0 0-1-1zm-7 10s-3-3-3-4.5a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1 3 0c0 1.5-3 4.5-3 4.5z"
    />
  </Svg>
);

export default SvgComponent;
