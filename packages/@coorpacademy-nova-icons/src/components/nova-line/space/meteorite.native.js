import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21.447 15.106l-4-2a1 1 0 0 0-.895 0l-4 2A1 1 0 0 0 12 16v5c0 .379.214.725.553.895l4 2a1.001 1.001 0 0 0 .894 0l4-2c.339-.17.553-.516.553-.895v-5a.998.998 0 0 0-.553-.894zM20 19v1.382l-3 1.5-3-1.5V19a2 2 0 0 0 2-2c0-.444-.15-.852-.396-1.184L17 15.119l3 1.5V19z" />
      <Circle cx={19} cy={19} r={1} />
      <Path d="M10.528 18.208l-9.9-5.658.745-1.302 9.899 5.658zM11.55 1.627l5.657 9.898-1.303.744-5.656-9.898zM3.508 7.72l3.535 2.122-.771 1.285-3.536-2.121zM8.007 3.735l2.121 3.536-1.286.771L6.72 4.507zM13.55 13.49l-1.06 1.06-2.12-2.122 1.06-1.06z" />
    </G>
  </Svg>
);

export default SvgComponent;
