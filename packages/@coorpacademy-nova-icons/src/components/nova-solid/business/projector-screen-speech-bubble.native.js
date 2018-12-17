import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M22 7V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v10H2v2h9v2h2v-2h9v-2h-1V8a1 1 0 0 0 1-1zm-9 10H7l2.359-2.358A3.985 3.985 0 0 1 9 13a4 4 0 1 1 4 4zm7-11H4V5h16v1z"
    />
  </Svg>
);

export default SvgComponent;
