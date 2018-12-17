import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 14v-2h-2.263C18.846 8.555 15.72 6 12 6s-6.845 2.555-7.736 6H2v2h2c0 .339.028.671.069 1H2v2h2.589c.142.347.308.679.494 1H2v2h4.727A7.955 7.955 0 0 0 12 22a7.957 7.957 0 0 0 5.274-2H22v-2h-3.082c.186-.321.353-.653.493-1H22v-2h-2.069A8.06 8.06 0 0 0 20 14h2zM12 8c1.771 0 3.36.776 4.46 2H7.541A5.98 5.98 0 0 1 12 8zm-6 6c0-.702.128-1.374.351-2H11v7.91c-2.833-.479-5-2.943-5-5.91zm7 5.91V12h4.65c.223.626.35 1.298.35 2 0 2.967-2.167 5.431-5 5.91z" />
      <Circle cx={7} cy={5} r={1.5} />
      <Circle cx={17} cy={5} r={1.5} />
    </G>
  </Svg>
);

export default SvgComponent;
