import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24.001v24.002H.001z" />
    <G fill="currentColor">
      <Path d="M19.5 7c-1.367 0-3.996.772-5.846 1.375A4.006 4.006 0 0 1 15.858 11H19v2h-3.142a4.006 4.006 0 0 1-2.204 2.625C15.504 16.229 18.133 17 19.5 17c1.844 0 2.5-2.583 2.5-5s-.656-5-2.5-5zM8.142 13H5v-2h3.142a4.008 4.008 0 0 1 2.203-2.625C8.496 7.772 5.867 7 4.5 7c-.533 0-1.513.252-2.074 1.934C2.151 9.759 2 10.848 2 12c0 2.417.656 5 2.5 5 1.367 0 3.996-.771 5.845-1.375A4.005 4.005 0 0 1 8.142 13z" />
      <Circle cx={12} cy={12} r={3} />
    </G>
  </Svg>
);

export default SvgComponent;
