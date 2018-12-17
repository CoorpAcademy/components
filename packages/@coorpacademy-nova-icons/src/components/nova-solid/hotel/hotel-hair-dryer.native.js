import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M14.281 19.786a1.999 1.999 0 0 0 1.984 2.249H18a2 2 0 0 0 2-2v-6h-5l-.719 5.751zM20.201 4.178a5.033 5.033 0 0 0-4.109-1.101L7 5.035v6l9.092 1.956a5.03 5.03 0 0 0 4.109-1.101 5.03 5.03 0 0 0 0-7.712zM17 11.035a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
      <Circle cx={17} cy={8.035} r={1} />
      <Path d="M2.738 12.968L2.025 11.1l2.618-1 .714 1.868zM4.643 5.968l-2.619-1L2.738 3.1l2.618 1zM2 7.035h3v2H2z" />
    </G>
  </Svg>
);

export default SvgComponent;
