import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M21 8V6H3v2h1.63L11 13.46V22h2v-8.54L19.37 8H21zM7.703 8H11v2.826L7.703 8zM13 10.826V8h3.297L13 10.826z" />
      <Circle cx={19} cy={4} r={1} />
      <Circle cx={15} cy={4} r={1} />
      <Circle cx={9} cy={4} r={1} />
      <Circle cx={5} cy={4} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
