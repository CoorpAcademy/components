import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M4 17H1v2h3v3H0v2h5a1 1 0 0 0 1-1V6H4v11zM23.707 15.293L22 13.586V8c0-2.206-1.795-4-4-4-4.963 0-9 4.038-9 9v.807L7.295 18.07A3.976 3.976 0 0 1 10 17a4 4 0 0 1 4 4h1a4 4 0 0 1 8 0 1 1 0 0 0 1-1v-4a1 1 0 0 0-.293-.707zM20 13h-1.719l.689-2.757-1.941-.485-.81 3.242H11c0-3.859 3.141-7 7-7 1.104 0 2 .898 2 2v5z" />
      <Circle cx={19} cy={21} r={3} />
      <Circle cx={10} cy={21} r={3} />
    </G>
  </Svg>
);

export default SvgComponent;
