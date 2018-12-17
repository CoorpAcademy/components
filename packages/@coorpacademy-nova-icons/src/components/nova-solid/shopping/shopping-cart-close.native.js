import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={8} cy={22} r={2} />
      <Circle cx={16} cy={22} r={2} />
      <Path d="M20 4c-.466 0-.869.321-.975.775L18.051 9H7.314a5.955 5.955 0 0 1-3.289.998c0 .082-.016.163.004.244l2 8c.112.446.512.758.971.758h10c.466 0 .869-.321.975-.775L20.795 6H24V4h-4zM7.707 6.293L5.414 4l2.293-2.293L6.293.293 4 2.586 1.707.293.293 1.707 2.586 4 .293 6.293l1.414 1.414L4 5.414l2.293 2.293z" />
    </G>
  </Svg>
);

export default SvgComponent;
