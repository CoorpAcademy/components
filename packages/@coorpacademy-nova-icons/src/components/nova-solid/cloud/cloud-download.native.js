import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15 2.001c-2.51 0-4.74 1.31-5.979 3.357.966.457 1.996 1.263 2.971 2.647l-.817.576C9.678 6.455 8.393 6.001 7 6.001c-2.757 0-5 2.243-5 5s2.243 5 5 5h3v-3.998h4v3.998h1c3.859 0 7-3.14 7-7 0-3.859-3.141-7-7-7z" />
      <Path d="M15.293 17.294L13 19.587v-6.584h-2v6.584l-2.293-2.293-1.414 1.414L12 23.415l4.707-4.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
