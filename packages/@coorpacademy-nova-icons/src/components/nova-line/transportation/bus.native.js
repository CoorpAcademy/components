import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001-.002h24v24h-24z" />
    <G fill="currentColor">
      <Circle cx={8} cy={17} r={1} />
      <Circle cx={16} cy={17} r={1} />
      <Path d="M21 8h2v4h-2zM1 8h2v4H1zM18 3H6c-1.103 0-2 .896-2 2v16a2 2 0 0 0 4 0h8a2 2 0 0 0 4 0V5c0-1.104-.897-2-2-2zM6 9h12v4H6V9zm12 10H6v-4h12v4zM6 7V5h12v2H6z" />
    </G>
  </Svg>
);

export default SvgComponent;
