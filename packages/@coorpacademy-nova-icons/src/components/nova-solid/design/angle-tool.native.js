import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M15.292 7.292l1.414 1.413-2 2-1.413-1.413zM19.292 3.292l1.414 1.414-2 2-1.413-1.414zM4 8.159V4H2v18h18v-2h-4.159A13.986 13.986 0 0 0 4 8.159zm3.707 9.547l-1.414-1.413 2-2 1.414 1.413-2 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
