import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .003h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 14.001H4a2 2 0 0 0-2 2v4c0 1.102.896 2 2 2h16c1.104 0 2-.898 2-2v-4c0-1.103-.896-2-2-2zm-.003 6H4v-4h16l-.003 4zM16.707 7.708l-1.414-1.414L13 8.587V2.001h-2v6.586L8.707 6.294 7.293 7.708 12 12.416z" />
      <Circle cx={15} cy={18.001} r={1} />
      <Circle cx={18} cy={18.001} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
