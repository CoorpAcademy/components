import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 7H4c-1.103 0-2 .896-2 2v9c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V9c0-1.104-.897-2-2-2zM9.869 18l.667-1h2.93l.667 1H9.869zm6.666 0l-2-3h-5.07l-2 3H4V9h16l.001 9h-3.466z" />
      <Circle cx={7} cy={13} r={2} />
      <Circle cx={17} cy={13} r={2} />
      <Path d="M10 11h4v2h-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
