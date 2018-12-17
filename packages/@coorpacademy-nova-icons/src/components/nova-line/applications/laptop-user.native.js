import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M23.632 19.734L22 14.837V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11.837L.368 19.734c-.186.558-.11 1.131.208 1.571.317.442.836.695 1.424.695h20c.588 0 1.107-.253 1.425-.694.318-.441.393-1.014.207-1.572zM20 4v10H4V4h16zM2.388 20l1.333-4H20.28l1.333 4H2.388z" />
      <Circle cx={12} cy={7} r={2} />
      <Path d="M12 9a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4zM10 17h4v2h-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
