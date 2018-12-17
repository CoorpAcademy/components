import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.004h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14.611 13.667h-1.556a.39.39 0 0 0-.389.39v.759a3.683 3.683 0 0 1-3.481-3.481h.758a.39.39 0 0 0 .389-.39V9.39a.389.389 0 0 0-.389-.389H8.389A.389.389 0 0 0 8 9.39v1.945h.019a4.847 4.847 0 0 0 4.648 4.646v.02h1.944a.389.389 0 0 0 .389-.389v-1.556a.39.39 0 0 0-.389-.389z" />
      <Path d="M12 9.001v3h3z" />
      <Path d="M17 1.001a1 1 0 0 0-1-1H7.984A.983.983 0 0 0 7 .985v.016c0 3-3 2-3 6v10c0 4 3 3 3 6a1 1 0 0 0 1 1h8.016a.984.984 0 0 0 .984-.984v-.016c0-3 3-2 3-6v-10c0-4-3-3-3-6zm1 16c0 1.104-.897 2-2 2H8c-1.102 0-2-.896-2-2v-10c0-1.103.898-2 2-2h8c1.103 0 2 .897 2 2v10z" />
    </G>
  </Svg>
);

export default SvgComponent;
