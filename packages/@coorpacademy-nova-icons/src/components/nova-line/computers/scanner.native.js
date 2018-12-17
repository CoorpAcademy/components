import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4.816 15.002L18.63 3.777l-1.26-1.55L1.646 15.002H1v4c0 1.104.897 2 2 2h18c1.103 0 2-.896 2-2v-4H4.816zm-1.816 4v-2h18l.001 2H3z" />
      <Path d="M12 12.002h10v2H12z" />
    </G>
  </Svg>
);

export default SvgComponent;
