import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M21 7.999v-2H3v2h1.63l6.37 5.46v8.54h2v-8.54l6.37-5.46H21zm-13.297 0H11v2.826L7.703 7.999zM13 10.825V7.999h3.297L13 10.825z" />
      <Circle cx={19} cy={3.999} r={1.5} />
      <Circle cx={15} cy={3.999} r={1.5} />
      <Circle cx={9} cy={3.999} r={1.5} />
      <Circle cx={5} cy={3.999} r={1.5} />
    </G>
  </Svg>
);

export default SvgComponent;
