import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={12} cy={12} r={5} />
      <Path d="M11 1h2v4h-2zM17.657 4.93l1.414 1.414-1.415 1.415-1.414-1.415zM17.657 19.071l-1.414-1.414 1.414-1.414 1.414 1.414zM6.344 19.071l-1.415-1.414 1.415-1.414 1.414 1.414zM6.344 4.93l1.414 1.416L6.343 7.76 4.928 6.344zM11 19h2v4h-2zM19 11h4v2h-4zM1 11h4v2H1z" />
    </G>
  </Svg>
);

export default SvgComponent;
