import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4 9h8v2H4zM4 13h6v2H4z" />
      <Path d="M16 6v3h2V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h10v-2H2V2h10v4h4z" />
      <Path d="M23 15c0-2.206-1.795-4-4-4s-4 1.794-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-4-2c1.104 0 2 .897 2 2h-4c0-1.103.896-2 2-2zm3 9h-6v-5h6v5z" />
      <Circle cx={19} cy={19} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
