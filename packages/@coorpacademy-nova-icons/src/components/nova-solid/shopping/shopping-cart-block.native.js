import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={8} cy={22} r={2} />
      <Circle cx={16} cy={22} r={2} />
      <Path d="M20 4c-.466 0-.869.321-.975.775L18.051 9h-4.638A7.998 7.998 0 0 1 6 14c-.357 0-.705-.031-1.05-.077l1.079 4.319c.112.446.512.758.971.758h10c.466 0 .869-.321.975-.775L20.795 6H24V4h-4z" />
      <Path d="M12 6c0-3.309-2.691-6-6-6S0 2.691 0 6s2.691 6 6 6 6-2.691 6-6zM2 6c0-2.206 1.794-4 4-4 .739 0 1.425.216 2.019.566L2.566 8.019A3.966 3.966 0 0 1 2 6zm7.434-2.018C9.785 4.576 10 5.261 10 6c0 2.206-1.794 4-4 4a3.959 3.959 0 0 1-2.019-.566l5.453-5.452z" />
    </G>
  </Svg>
);

export default SvgComponent;
