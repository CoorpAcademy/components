import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M15 2h-2c-.55 0-1 .451-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V3c0-.549-.45-1-1-1zM7 1H3c-.55 0-1 .451-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V2c0-.549-.45-1-1-1zM15 10h-2c-.55 0-1 .451-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2c0-.549-.45-1-1-1zM7 9H3c-.55 0-1 .451-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-4c0-.549-.45-1-1-1zM15 18h-2c-.55 0-1 .451-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2c0-.549-.45-1-1-1zM7 17H3c-.55 0-1 .451-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-4c0-.549-.45-1-1-1z" />
      <Circle cx={21} cy={4} r={1} />
      <Circle cx={21} cy={11.999} r={1.001} />
      <Circle cx={21} cy={19.999} r={1.001} />
    </G>
  </Svg>
);

export default SvgComponent;
