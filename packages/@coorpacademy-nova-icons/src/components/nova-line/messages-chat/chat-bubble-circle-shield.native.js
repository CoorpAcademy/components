import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18.907 14c.054.328.091.66.091 1 0 3.86-3.589 7-8 7H3.291l1.328-1.43a1 1 0 0 0 .021-1.338C3.566 18 2.998 16.537 2.998 15c0-3.563 3.06-6.506 7-6.939V6.046c-5.046.452-9 4.296-9 8.954 0 1.735.541 3.392 1.573 4.836L.265 22.32A.999.999 0 0 0 .998 24h10c5.514 0 10-4.037 10-9 0-.338-.025-.671-.065-1h-2.026z" />
      <Path d="M11.998 0v7c0 3.813 3.796 5.579 5.804 5.98l.196.039.196-.039c2.007-.401 5.804-2.168 5.804-5.98V0h-12zm10 7c0 2.763-3.154 3.757-3.998 3.973-.827-.216-4.002-1.225-4.002-3.973V2h8v5z" />
      <Path d="M16.998 9h2V7h2V5h-2V3h-2v2h-2v2h2z" />
    </G>
  </Svg>
);

export default SvgComponent;
