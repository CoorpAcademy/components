import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v2.002h20V2zM3 3a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM14 16a5 5 0 0 1 6-4.899V5.002H0V16c0 1.103.896 2 2 2h12.422A4.979 4.979 0 0 1 14 16z" />
      <Circle cx={19} cy={16} r={3} />
      <Path d="M19 19a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
