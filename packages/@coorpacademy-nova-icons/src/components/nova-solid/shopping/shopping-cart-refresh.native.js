import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={8} cy={22} r={2} />
      <Circle cx={16} cy={22} r={2} />
      <Path d="M20 3.999c-.466 0-.869.321-.975.775L18.051 9h-4.638A7.998 7.998 0 0 1 6 14c-.357 0-.705-.031-1.05-.077l1.079 4.319c.112.446.512.758.971.758h10c.466 0 .869-.321.975-.775l2.82-12.226H24v-2h-4z" />
      <Path d="M12.001 6h-2c0 2.206-1.794 4-4 4-1.077 0-2.064-.44-2.811-1.189L5.001 7h-5v5l1.764-1.764A6.026 6.026 0 0 0 6.001 12c3.309 0 6-2.691 6-6zM6.001 2c1.078 0 2.065.44 2.812 1.188L7.001 5h5V0L10.24 1.761A5.937 5.937 0 0 0 6.001 0c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
