import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0H24v24H-.001z" />
    <G fill="currentColor">
      <Path d="M19.773 18.902L18.215 4.878C18.039 3.291 16.597 2 15 2H9C7.403 2 5.961 3.291 5.785 4.877L4.227 18.902a2.804 2.804 0 0 0 .682 2.182A2.8 2.8 0 0 0 7 22h10c.809 0 1.57-.334 2.092-.916.522-.584.77-1.379.681-2.182zM9 4h6c.589 0 1.162.514 1.227 1.098L16.438 7H7.563l.211-1.902C7.838 4.514 8.411 4 9 4zm8.603 15.75A.797.797 0 0 1 17 20H7a.797.797 0 0 1-.603-.25.793.793 0 0 1-.183-.627L7.34 9h9.32l1.125 10.122a.793.793 0 0 1-.182.628z" />
      <Circle cx={9} cy={10.5} r={0.75} />
      <Circle cx={12} cy={10.5} r={0.75} />
      <Circle cx={15} cy={10.5} r={0.75} />
      <Circle cx={10.5} cy={12.5} r={0.75} />
      <Circle cx={13.5} cy={12.5} r={0.75} />
      <Circle cx={9} cy={14.5} r={0.75} />
      <Circle cx={12} cy={14.5} r={0.75} />
      <Circle cx={15} cy={14.5} r={0.75} />
      <Circle cx={10.5} cy={16.5} r={0.75} />
      <Circle cx={13.5} cy={16.5} r={0.75} />
      <Circle cx={9} cy={18.5} r={0.75} />
      <Circle cx={12} cy={18.5} r={0.75} />
      <Circle cx={15} cy={18.5} r={0.75} />
    </G>
  </Svg>
);

export default SvgComponent;
