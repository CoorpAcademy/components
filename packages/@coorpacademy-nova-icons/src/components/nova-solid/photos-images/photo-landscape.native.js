import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20 5.002H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2zm-8 3a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 8.002zm-3 8a3 3 0 1 1 6 0H9z"
    />
  </Svg>
);

export default SvgComponent;
