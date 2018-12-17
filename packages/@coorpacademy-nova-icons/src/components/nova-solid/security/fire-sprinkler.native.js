import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24.001v24.001H.001z" />
    <G fill="currentColor">
      <Path d="M15.652 16.243a.998.998 0 0 0-1.206-.074L13 17.133v-4.132a.999.999 0 1 0-1.687-.726c-.721.682-4.312 4.213-4.312 6.726 0 2.757 2.243 5 5 5s5-2.243 5-5c-.001-1.556-1.211-2.641-1.349-2.758zM9 .001h6v2H9z" />
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
