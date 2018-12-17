import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 16h4v4h-4zM4 16h4v4H4zM10 10h4v4h-4z" />
      <Path d="M0 24h18V6H0v18zM2 8h14v14H2V8z" />
      <Path d="M4 10h4v4H4zM20 0h2v6h-2z" />
      <Circle cx={21} cy={8} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
