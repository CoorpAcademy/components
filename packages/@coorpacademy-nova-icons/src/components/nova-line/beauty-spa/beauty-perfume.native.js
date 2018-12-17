import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Circle cx={8} cy={8} r={1} />
      <Circle cx={5.5} cy={6} r={1} />
      <Circle cx={5.5} cy={10} r={1} />
      <Circle cx={3} cy={8} r={1} />
      <Circle cx={3} cy={4} r={1} />
      <Circle cx={3} cy={12} r={1} />
      <Path d="M9 17v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1zm2 1h4v1h-4v-1z" />
      <Path d="M15.237 8c.54 1.173 1.992 2 3.763 2 2.243 0 4-1.318 4-3s-1.757-3-4-3c-1.771 0-3.223.827-3.763 2H13a1 1 0 0 0-1 1v2h-1a1 1 0 0 0-1 1v1.589C7.072 12.779 5 15.65 5 19c0 1.642.498 3.223 1.44 4.573a.999.999 0 0 0 .82.427h11.48a.999.999 0 0 0 .82-.427A7.954 7.954 0 0 0 21 19c0-3.35-2.072-6.221-5-7.411V10a1 1 0 0 0-1-1h-1V8h1.237zM19 6c1.202 0 2 .602 2 1s-.798 1-2 1-2-.602-2-1 .798-1 2-1zm0 13a5.957 5.957 0 0 1-.807 3H7.807A5.957 5.957 0 0 1 7 19c0-3.309 2.691-6 6-6s6 2.691 6 6z" />
    </G>
  </Svg>
);

export default SvgComponent;
