import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Circle cx={19} cy={6} r={2} />
      <Path d="M19 9c-2.393 0-4 2.009-4 5v2a1 1 0 0 0 1 1h1v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h1a1 1 0 0 0 1-1v-2c0-2.991-1.607-5-4-5zM11 2h2v20h-2z" />
      <Circle cx={5} cy={6} r={2} />
      <Path d="M8.175 14.533C6.949 9.523 6.821 9 4.978 9c-1.799 0-1.928.524-3.154 5.539-.219.895-.479 1.957-.794 3.219-.074.295-.009.608.175.85.185.241.469.385.774.392 0 0 .745.016 1.332.018.192.573.478 1.465.736 2.283a1 1 0 0 0 1.907 0c.258-.818.545-1.71.736-2.283.587-.002 1.331-.018 1.331-.018a1 1 0 0 0 .948-1.243c-.315-1.264-.575-2.328-.794-3.224z" />
    </G>
  </Svg>
);

export default SvgComponent;
