import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7 16.639V6h4V4H6a1 1 0 0 0-1 1v11.639L.232 22.36A1 1 0 0 0 1 24h10a.997.997 0 1 0 .768-1.639L7 16.639zM3.135 22L6 18.563 8.865 22h-5.73z" />
      <Path d="M19 6.809V2h1V0h-8v2h1v4.809A5.999 5.999 0 0 0 10 12c0 3.309 2.691 6 6 6s6-2.691 6-6a5.999 5.999 0 0 0-3-5.191zM16 16c-2.206 0-4-1.794-4-4 0-1.586.942-3.022 2.401-3.662A1 1 0 0 0 15 7.422V2h2v5.422a1 1 0 0 0 .599.916A4.002 4.002 0 0 1 20 12c0 2.206-1.794 4-4 4z" />
      <Circle cx={17} cy={11} r={1} />
      <Circle cx={14} cy={13} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
