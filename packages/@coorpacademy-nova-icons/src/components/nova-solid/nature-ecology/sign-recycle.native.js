import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M21.872 19.51l-3.384-6.016-1.743.981L19.29 19H16v-2l-4 3 4 3v-2h5a.999.999 0 0 0 .872-1.49zM12 6.04l2.083 3.704-1.788 1.083 4.637 1.87.497-4.979-1.634.989-2.923-5.197c-.354-.63-1.389-.63-1.743 0L7.716 9.577l1.743.981L12 6.04zM6.537 15.754l1.776.912-.838-4.928-4.498 2.186 1.78.915-2.629 4.671A1.001 1.001 0 0 0 3 21h8v-2H4.71l1.827-3.246z" />
    </G>
  </Svg>
);

export default SvgComponent;
