import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={8} cy={22} r={2} />
      <Circle cx={16} cy={22} r={2} />
      <Path d="M20 3.999c-.466 0-.869.321-.975.775L18.051 9h-4.638A7.998 7.998 0 0 1 6 14c-.357 0-.705-.031-1.05-.077l1.079 4.319c.112.446.512.758.971.758h10c.466 0 .869-.321.975-.775l2.82-12.226H24v-2h-4z" />
      <Path d="M12 5.999c0-3.307-2.692-6-6-6-3.309 0-6 2.693-6 6 0 3.309 2.691 6 6 6 3.308 0 6-2.691 6-6zM6 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM5 5.999h2v4H5v-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
