import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10.998 22H3.291l1.328-1.43a1 1 0 0 0 .021-1.338C3.566 18 2.998 16.537 2.998 15c0-3.859 3.589-7 8-7 .339 0 .672.024 1 .061V6.046c-.329-.03-.663-.046-1-.046-5.514 0-10 4.037-10 9 0 1.735.541 3.392 1.573 4.836L.265 22.32A.999.999 0 0 0 .998 24h10c5.514 0 10-4.037 10-9h-2c0 3.86-3.589 7-8 7z" />
      <Path d="M22.998 4c0-2.205-1.794-4-4-4s-4 1.795-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-4-2c1.103 0 2 .896 2 2h-4c0-1.104.897-2 2-2zm3 9h-6V6h6v5z" />
      <Circle cx={18.998} cy={8} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
