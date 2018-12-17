import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M16 8.961V5.999a1 1 0 0 0-.293-.707l-3-3a1 1 0 0 0-1.414 0l-3 3A.997.997 0 0 0 8 5.999v2.962l-.926 12.038H5v2h14v-2h-2.074L16 8.961zm-6-2.547l2-2 2 2v1.585h-4V6.414zm-.92 14.585l.846-11h4.147l.846 11H9.08z" />
      <Path d="M24 4.44l-7.409 4.559L24 13.558V11.21l-3.592-2.211L24 6.79zM0 4.44v2.35l3.591 2.209L0 11.21v2.348l7.408-4.559z" />
    </G>
  </Svg>
);

export default SvgComponent;
