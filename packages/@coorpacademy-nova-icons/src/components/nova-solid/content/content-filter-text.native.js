import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      fill="currentColor"
      d="M23 24H13a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1zm-9-2h8V12h-8v10z"
    />
    <Path fill="currentColor" d="M15 16h6v2h-6zM17 13h4v2h-4zM15 19h6v2h-6z" />
    <G fill="currentColor">
      <Path d="M0 3v1c0 .256.098.512.293.707L6 10.415V18a1.002 1.002 0 0 0 1.707.707l2-2A1 1 0 0 0 10 16v-5.586l5.707-5.707A.995.995 0 0 0 16 4.001V3H0zM14 .001H2c-1.104 0-2 .898-2 2h16c0-1.103-.896-2-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
