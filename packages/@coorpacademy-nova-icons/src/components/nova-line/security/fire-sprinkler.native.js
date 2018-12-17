import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24.001v24.001H.001z" />
    <G fill="currentColor">
      <Path d="M15.652 16.243a1 1 0 0 0-1.206-.074L13 17.133v-4.132a.999.999 0 1 0-1.687-.725C10.592 12.958 7 16.488 7 19.001c0 2.757 2.243 5 5 5s5-2.243 5-5c0-1.556-1.21-2.641-1.348-2.758zM12 22.001c-1.654 0-3-1.346-3-3 0-.804.929-2.198 2-3.473v3.473a1 1 0 0 0 1.554.832l2.246-1.497c.111.2.199.432.199.665a3.002 3.002 0 0 1-2.999 3zM9 .001h6v2H9z" />
      <Circle cx={12} cy={4.001} r={1} />
      <Circle cx={12} cy={7.001} r={1} />
      <Circle cx={15} cy={4.001} r={1} />
      <Circle cx={17} cy={7.001} r={1} />
      <Circle cx={9} cy={4.001} r={1} />
      <Circle cx={7} cy={7.001} r={1} />
      <Circle cx={5} cy={10.001} r={1} />
      <Circle cx={10} cy={10.001} r={1} />
      <Circle cx={14} cy={10.001} r={1} />
      <Circle cx={19} cy={10.001} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
