import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.001h24v24.001h-24z" />
    <Path
      fill="currentColor"
      d="M19 6.001c-3.44 0-6.174-3.566-6.201-3.601-.378-.5-1.22-.5-1.598 0C11.174 2.436 8.44 6.001 5 6.001a1 1 0 0 0-1 1v7c0 3.807 6.763 7.478 7.533 7.885a1.002 1.002 0 0 0 .934 0c.771-.407 7.533-4.078 7.533-7.885v-7a1 1 0 0 0-1-1zm-7 11a3.753 3.753 0 0 1-3.75-3.75c0-2.071 3.75-6.25 3.75-6.25v6.25l2.5-2.5s1.25 1.58 1.25 2.5a3.751 3.751 0 0 1-3.75 3.75z"
    />
  </Svg>
);

export default SvgComponent;
