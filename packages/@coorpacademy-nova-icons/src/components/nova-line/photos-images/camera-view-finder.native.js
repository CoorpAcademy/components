import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 2.999H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-14c0-1.103-.897-2-2-2zm-14 16v-14h14l.001 14H5z" />
      <Path d="M12 5.999c-3.309 0-6 2.692-6 6 0 3.309 2.691 6 6 6s6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" />
      <Circle cx={12} cy={11.999} r={2} />
    </G>
  </Svg>
);

export default SvgComponent;
