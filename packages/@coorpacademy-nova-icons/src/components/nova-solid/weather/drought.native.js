import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={5} cy={4.005} r={3} />
      <Path d="M21.447 6.899A.997.997 0 0 0 22 6.005v-2a1 1 0 0 0-2 0v1.382l-2 1V3.505a1.5 1.5 0 0 0-3 0v5.882l-2-1V7.005a1 1 0 0 0-2 0v2c0 .379.214.726.553.894L15 11.623v2.382H2v8h20v-8h-4V8.623l3.447-1.724zM19 16.005v2h-2v2h-2v-2h-2v2h-2v-2H9v2H7v-2H5v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2z" />
    </G>
  </Svg>
);

export default SvgComponent;
