import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 2h19v2H3zM3 5h19v2H3zM3 8h19v2H3zM3 14h7v2H3zM3 17h7v2H3zM3 20h7v2H3z" />
      <Path d="M18 11H3v2h15c1.103 0 2 .897 2 2s-.897 2-2 2h-2.586l1.293-1.293-1.414-1.413L11.586 18l3.707 3.706 1.414-1.413L15.414 19H18c2.206 0 4-1.794 4-4s-1.794-4-4-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
