import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M22 14v-4h-2.262a7.93 7.93 0 0 0-1.174-2.564L20 5.999l-2-2-1.435 1.436A7.967 7.967 0 0 0 14 4.261V2h-4v2.262a7.9 7.9 0 0 0-2.564 1.174L6 4 4 6l1.436 1.436A7.9 7.9 0 0 0 4.262 10H2v4h2.262c.24.932.639 1.799 1.174 2.564L4 18l2 2 1.436-1.436A7.94 7.94 0 0 0 10 19.738V22h4v-2.262a7.946 7.946 0 0 0 2.565-1.174L18 20l2-2-1.435-1.436A7.952 7.952 0 0 0 19.739 14H22zm-12 2V8l6 4-6 4z"
    />
  </Svg>
);

export default SvgComponent;
