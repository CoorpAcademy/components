import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 6h-2V5c0-2.757-2.243-5-5-5S4 2.243 4 5v1H2a.999.999 0 0 0-.996.917l-1 12A.997.997 0 0 0 1 20h16a1 1 0 0 0 .996-1.083l-1-12A.999.999 0 0 0 16 6zM6 5c0-1.654 1.346-3 3-3s3 1.346 3 3v1H6V5zM2.087 18L2.92 8H4v3h2V8h6v3h2V8h1.08l.833 10H2.087zM20 14h2v6h-2z" />
      <Circle cx={21} cy={22} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
