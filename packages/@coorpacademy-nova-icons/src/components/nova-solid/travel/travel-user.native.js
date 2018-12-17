import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M20 11.016h3v2h-3zM19.072 3.531l1.414 1.414-2.12 2.12-1.415-1.413zM4.93 3.53l2.12 2.121-1.413 1.414-2.121-2.12zM1 11.016h3v2H1zM4.93 20.501l-1.415-1.414 2.121-2.121L7.05 18.38zM19.07 20.502l-2.12-2.122 1.414-1.414 2.121 2.121z" />
      <Circle cx={12} cy={5} r={3} />
      <Path d="M17 13c0-2.757-2.243-5-5-5s-5 2.243-5 5v3a1 1 0 0 0 1 1h1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4h1a1 1 0 0 0 1-1v-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
