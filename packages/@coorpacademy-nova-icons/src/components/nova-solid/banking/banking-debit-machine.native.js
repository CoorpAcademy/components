import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 5.278V1a.999.999 0 0 0-1.316-.949L9.076.92 7.447.105a1.006 1.006 0 0 0-.895 0L4.924.92 2.316.051A1 1 0 0 0 1 1v4.278C.405 5.626 0 6.263 0 7v15c0 1.103.896 2 2 2h10c1.104 0 2-.897 2-2V7c0-.737-.405-1.374-1-1.722zM4.684 2.949a.999.999 0 0 0 .764-.055L7 2.119l1.553.774c.237.12.511.14.763.056L11 2.387V5H3V2.387l1.684.562zM11.997 22H2V7h10l-.003 15z" />
      <Path d="M3 8h8v4H3z" />
      <Circle cx={4} cy={14} r={1} />
      <Circle cx={10} cy={14} r={1} />
      <Circle cx={7} cy={14} r={1} />
      <Circle cx={4} cy={17} r={1} />
      <Circle cx={10} cy={17} r={1} />
      <Circle cx={7} cy={17} r={1} />
      <Circle cx={4} cy={20} r={1} />
      <Circle cx={10} cy={20} r={1} />
      <Circle cx={7} cy={20} r={1} />
      <Path d="M23 8h-7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-6 2h1v8h-1v-8zm5 8h-2v-8h2v8z" />
    </G>
  </Svg>
);

export default SvgComponent;
