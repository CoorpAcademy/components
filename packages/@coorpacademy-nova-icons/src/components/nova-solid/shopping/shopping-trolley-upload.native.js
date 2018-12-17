import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 5.999a1 1 0 0 0-.996.91L17.087 17H2v2h16a1 1 0 0 0 .996-.91L19.913 8H22V6h-3z" />
      <Circle cx={5} cy={22} r={2} />
      <Circle cx={16} cy={22} r={2} />
      <Path d="M9 8.414V14h2V8.414l2.293 2.293 1.414-1.415L10 4.585 5.293 9.292l1.414 1.415z" />
    </G>
  </Svg>
);

export default SvgComponent;
