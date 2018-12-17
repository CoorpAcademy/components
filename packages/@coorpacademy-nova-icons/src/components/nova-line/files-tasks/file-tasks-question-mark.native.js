import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 10c-1.93 0-3.5 1.57-3.5 3.5h2c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5S12.827 15 12 15h-1v2h2v-.146a3.506 3.506 0 0 0 2.5-3.354c0-1.93-1.57-3.5-3.5-3.5z" />
      <Path d="M19 5h-2V3h-1.142c-.447-1.719-2-3-3.858-3S8.589 1.281 8.142 3H7v2H5c-1.103 0-2 .898-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V7c0-1.102-.897-2-2-2zm-7-3c.739 0 1.385.402 1.731 1h-3.463c.347-.598.993-1 1.732-1zM9 5h6v2H9V5zm10 16H5V7h2v2h10V7h2v14z" />
      <Circle cx={12} cy={19} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
