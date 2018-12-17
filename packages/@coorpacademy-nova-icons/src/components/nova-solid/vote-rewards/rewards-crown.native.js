import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21.596 8.197a1 1 0 0 0-1.11-.054l-4.183 2.51-3.471-5.207c-.038-.057-.101-.083-.148-.128l.963-.964a.502.502 0 0 0 0-.707l-1.293-1.293a.502.502 0 0 0-.707 0l-1.293 1.293a.502.502 0 0 0 0 .707l.963.964c-.048.045-.11.071-.148.128l-3.471 5.207-4.183-2.51a1.006 1.006 0 0 0-1.111.054 1.005 1.005 0 0 0-.375 1.046l2 8c.112.445.512.758.971.758h14c.459 0 .859-.312.971-.758l2-8a1.005 1.005 0 0 0-.375-1.046zM4 19.001h16v2H4z" />
    </G>
  </Svg>
);

export default SvgComponent;
