import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={8} cy={22} r={2} />
      <Circle cx={16} cy={22} r={2} />
      <Path d="M20 4a1 1 0 0 0-.975.775L18.051 9h-4.638A7.998 7.998 0 0 1 6 14c-.357 0-.706-.031-1.05-.077l1.08 4.32A1 1 0 0 0 7 19h10a1 1 0 0 0 .975-.775L20.795 6H24V4h-4z" />
      <Path d="M12 5.984c0-3.308-2.691-6-6-6s-6 2.692-6 6 2.691 6 6 6 6-2.692 6-6zm-7-4h2v3h2v2H5v-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
