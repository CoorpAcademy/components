import React from "react";
import Svg, { Path, Circle, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M18 12c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm0-10c-2.205 0-4 1.795-4 4s1.795 4 4 4 4-1.795 4-4-1.794-4-4-4z"
      fill="currentColor"
    />
    <Circle cx={18} cy={6} r={2} fill="currentColor" />
    <G>
      <Path
        d="M18 23h-5C6.383 23 1 17.617 1 11V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2.003 2.003 0 0 1-1.908 1.998c.438 2.584 2.367 4.52 4.91 4.924A2.002 2.002 0 0 1 14 15h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2zM3 6v5c0 5.514 4.486 10 10 10h5.002L18 17h-4v1a1 1 0 0 1-1 1c-4.488 0-7.928-3.433-8-7.984A.997.997 0 0 1 6 10h1V6H3z"
        fill="currentColor"
      />
    </G>
  </Svg>
);

export default SvgComponent;
