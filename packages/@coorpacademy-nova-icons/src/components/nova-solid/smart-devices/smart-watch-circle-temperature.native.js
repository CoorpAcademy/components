import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.003h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={9} cy={10.001} r={1} />
      <Path d="M16 15.334h-2.5a2.503 2.503 0 0 1-2.5-2.5v-1.667c0-1.378 1.122-2.5 2.5-2.5H16v1.667h-2.5a.834.834 0 0 0-.833.833v1.667c0 .46.374.833.833.833H16v1.667z" />
      <Path d="M16.318 5.273L15 .001H9L7.682 5.273a7.987 7.987 0 0 0 0 13.455L9 24.001h6l1.318-5.272a7.987 7.987 0 0 0 0-13.456zM12 18.001a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
    </G>
  </Svg>
);

export default SvgComponent;
