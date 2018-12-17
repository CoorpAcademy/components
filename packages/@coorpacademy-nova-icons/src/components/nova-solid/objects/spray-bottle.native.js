import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Circle cx={15} cy={6} r={1} />
      <Circle cx={17} cy={4} r={1} />
      <Circle cx={20} cy={2} r={1} />
      <Circle cx={20} cy={6} r={1} />
      <Circle cx={20} cy={10} r={1} />
      <Circle cx={17} cy={8} r={1} />
      <Path d="M13 5a1 1 0 0 0-1-1H7a1 1 0 0 0-.832.445l-2 3A.998.998 0 0 0 5 9h6.001v1H11c0 .265.106.519.293.707l3 3 1.414-1.413L13 9.586V5z" />
      <Path d="M10 10.586V10H6v.586l-2.707 2.707A1 1 0 0 0 3 14v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7c0-.265-.106-.519-.293-.707L10 10.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
