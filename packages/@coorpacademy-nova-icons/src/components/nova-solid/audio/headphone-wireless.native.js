import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7.826 6.576l1.427 1.427c.746-.751 1.734-1.193 2.814-1.193 1.078 0 2.064.439 2.81 1.188l1.428-1.43a5.942 5.942 0 0 0-4.237-1.758 6.037 6.037 0 0 0-4.242 1.766z" />
      <Path d="M12.067 2.81c2.134 0 4.154.851 5.649 2.347l1.413-1.412A9.968 9.968 0 0 0 5 3.749l1.413 1.414a7.975 7.975 0 0 1 5.654-2.353zM12 9.003c-4.411 0-8 3.588-8 8v6h3a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H6c0-3.309 2.691-6 6-6s6 2.691 6 6h-1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h3v-6c0-4.412-3.589-8-8-8z" />
    </G>
  </Svg>
);

export default SvgComponent;
