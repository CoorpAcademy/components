import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15 13h4V9c0-2.205-1.794-4-4-4h-4V3h3V1H6v2h3v2H2v4h13v4z" />
      <Circle cx={17} cy={16} r={1} />
      <Circle cx={15} cy={18.5} r={1} />
      <Circle cx={19} cy={18.5} r={1} />
      <Circle cx={17} cy={21} r={1} />
      <Circle cx={13} cy={21} r={1} />
      <Circle cx={21} cy={21} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
