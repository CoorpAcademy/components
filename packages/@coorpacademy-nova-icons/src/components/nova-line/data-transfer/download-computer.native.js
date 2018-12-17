import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .003h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 8.001h-1v2h1v5H5v-5h1v-2H5a2 2 0 0 0-2 2v9c0 1.102.896 2 2 2h6v1H8v2h8v-2h-3v-1h6c1.104 0 2-.898 2-2v-9a2 2 0 0 0-2-2zm-14 11v-2h14v2H5z" />
      <Path d="M16.707 7.708l-1.414-1.414L13 8.587V.001h-2v8.586L8.707 6.294 7.293 7.708 12 12.415z" />
    </G>
  </Svg>
);

export default SvgComponent;
