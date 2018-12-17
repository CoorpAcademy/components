import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .003h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 8.001h-2v2h2v5H5v-5h2v-2H5a2 2 0 0 0-2 2v9c0 1.102.896 2 2 2h6v1H8v2h8v-2h-3v-1h6c1.104 0 2-.898 2-2v-9a2 2 0 0 0-2-2zm-14 11v-2h14v2H5z" />
      <Path d="M11 4.415v8.586h2V4.415l2.293 2.293 1.414-1.414L12 .587 7.293 5.294l1.414 1.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
