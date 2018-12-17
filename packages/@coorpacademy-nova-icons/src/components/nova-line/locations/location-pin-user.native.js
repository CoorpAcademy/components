import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M12 2c-4.411 0-8 3.589-8 8s4.644 9.44 8 12.318c3.354-2.876 8-7.907 8-12.318s-3.589-8-8-8zm0 17.654C9.87 17.657 6 13.338 6 10c0-3.309 2.691-6 6-6s6 2.691 6 6c0 3.338-3.87 7.657-6 9.654z" />
      <Path d="M12 10.25c-2.301 0-3.75 1.449-3.75 3.75h7.5c0-2.301-1.449-3.75-3.75-3.75z" />
      <Circle cx={12} cy={7.5} r={2.5} />
    </G>
  </Svg>
);

export default SvgComponent;
