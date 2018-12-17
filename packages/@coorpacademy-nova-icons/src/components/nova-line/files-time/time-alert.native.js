import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 0C4.038 0 0 4.038 0 9s4.038 9 9 9 9-4.038 9-9-4.037-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7c3.859 0 7 3.14 7 7s-3.14 7-7 7z" />
      <Path d="M10 4H8v5.535l3.446 2.297 1.109-1.664L10 8.465zM20 14h2v6h-2z" />
      <Circle cx={21} cy={22} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
