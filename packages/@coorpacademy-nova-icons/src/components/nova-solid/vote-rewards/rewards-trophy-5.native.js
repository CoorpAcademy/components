import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      fill={props.color}
      d="M7 20.001h10v2H7zM21 3.001h-3.278c-.347-.595-.984-1-1.722-1H8c-.737 0-1.375.405-1.722 1H3a1 1 0 00-1 1v4c0 .304.139.592.375.781l4.929 3.942A5.997 5.997 0 0011 14.911v1.09H9a1 1 0 00-1 1v2h8v-2a1 1 0 00-1-1h-2v-1.09a5.997 5.997 0 003.696-2.187l4.929-3.942c.236-.189.375-.477.375-.781v-4a1 1 0 00-1-1zM4 7.521v-2.52h2v4c0 .042.006.082.006.125L4 7.521zm16 0l-2.006 1.606c0-.044.006-.084.006-.126v-4h2v2.52z"
    />
  </Svg>
);

export default SvgComponent;
