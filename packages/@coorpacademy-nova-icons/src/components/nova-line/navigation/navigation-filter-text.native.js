import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path d="M18 22.001H3a1 1 0 0 1-1-1v-15h2v14h14v2z" fill="currentColor" />
    <Path
      d="M21 18.001H7a1 1 0 0 1-1-1v-14a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm-13-2h12v-12H8v12z"
      fill="currentColor"
    />
    <Path fill="currentColor" d="M10 7.001h8v2h-8zM10 11.001h6v2h-6z" />
  </Svg>
);

export default SvgComponent;
