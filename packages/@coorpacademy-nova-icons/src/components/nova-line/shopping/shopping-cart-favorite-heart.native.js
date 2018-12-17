import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={8} cy={22} r={2} />
      <Circle cx={16} cy={22} r={2} />
      <Path d="M20 3.999c-.466 0-.869.321-.975.775L18.051 9H12v2h5.589l-1.384 6H7.781l-1-4H4.719l1.311 5.243A1 1 0 0 0 7 19h10c.466 0 .869-.321.975-.775l2.82-12.226H24v-2h-4zM6 11c.178 0 .355-.048.515-.142C7.076 10.521 12 7.466 12 4c0-2.393-1.607-4-4-4-.735 0-1.451.332-2 .846C5.451.332 4.735 0 4 0 1.607 0 0 1.607 0 4c0 3.466 4.924 6.521 5.485 6.858.16.094.337.142.515.142zM2 4c0-.602.195-2 2-2 .449 0 1 .552 1 1a1 1 0 1 0 2 0c0-.448.551-1 1-1 1.805 0 2 1.398 2 2 0 1.738-2.578 3.846-4 4.811C4.578 7.846 2 5.738 2 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
