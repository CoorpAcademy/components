import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M16 7.86V4c0-1.102-.897-2-2-2h-4c-1.103 0-2 .898-2 2v3.86l-2.094 7.33L12 23.721l6.094-8.531L16 7.86zM10 4h4v3h-4V4zm2 16.279L8.094 14.81 9.754 9h4.491l1.661 5.811L12 20.279z" />
      <Circle cx={12} cy={13.5} r={1.5} />
    </G>
  </Svg>
);

export default SvgComponent;
