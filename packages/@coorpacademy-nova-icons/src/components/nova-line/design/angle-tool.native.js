import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M15.292 7.293l1.414 1.413-2 2-1.413-1.413zM19.292 3.293l1.414 1.413-2 2-1.413-1.413zM7.708 17.707l-1.414-1.413 2-2 1.413 1.413z" />
      <Path d="M4 8.051V4H2v18h18v-2h-4.051C15.461 13.63 10.37 8.54 4 8.051zm0 2c5.268.478 9.472 4.682 9.949 9.949H4v-9.949z" />
    </G>
  </Svg>
);

export default SvgComponent;
