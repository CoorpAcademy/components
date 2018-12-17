import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M10 19h2l2-8h-2z" />
      <Circle cx={15} cy={16} r={1} />
      <Circle cx={9} cy={14} r={1} />
      <Path d="M21.707 12.293l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 14h2v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8h2a1 1 0 0 0 .707-1.707zM18 12a1 1 0 0 0-1 1v8H7v-8a1 1 0 0 0-1-1h-.586L12 5.414 18.586 12H18z" />
    </G>
  </Svg>
);

export default SvgComponent;
