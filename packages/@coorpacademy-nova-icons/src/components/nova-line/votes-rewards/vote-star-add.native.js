import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13.688 11.351l3.984-3.608A1 1 0 0 0 17 6.001h-4.694L9.907.83a1 1 0 0 0-1.814 0L5.694 6.001H1a1 1 0 0 0-.672 1.742l3.984 3.608-1.607 5.625a1 1 0 0 0 1.517 1.106L9 14.897l4.778 3.186a1.003 1.003 0 0 0 1.145-.024 1 1 0 0 0 .372-1.082l-1.607-5.626zm-4.133 1.513a1 1 0 0 0-1.11 0l-3.07 2.046 1.031-3.607a1.001 1.001 0 0 0-.291-1.016L3.594 8.001h2.739a1 1 0 0 0 .907-.579L9 3.627l1.76 3.795a.999.999 0 0 0 .907.579h2.739l-2.521 2.285a1 1 0 0 0-.291 1.016l1.031 3.607-3.07-2.045zM24 19.001h-3v-3h-2v3h-3v2h3v3h2v-3h3z" />
    </G>
  </Svg>
);

export default SvgComponent;
