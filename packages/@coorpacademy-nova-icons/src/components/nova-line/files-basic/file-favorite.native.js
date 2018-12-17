import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M17 22H5c-1.103 0-2-.897-2-2V4c0-1.102.897-2 2-2h6v2H5v16h12v-5h2v5c0 1.103-.897 2-2 2z"
      fill="currentColor"
    />
    <Path
      d="M16 9a3.982 3.982 0 0 1-1.488-.293L13 14l3-2 3 2-1.512-5.293A3.982 3.982 0 0 1 16 9z"
      fill="currentColor"
    />
    <Circle cx={16} cy={5} r={3} fill="currentColor" />
  </Svg>
);

export default SvgComponent;
