import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Circle cx={19} cy={5} r={3} />
      <Path d="M19 8c-2.757 0-5 2.243-5 5v3a1 1 0 0 0 1 1h1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4h1a1 1 0 0 0 1-1v-3c0-2.757-2.243-5-5-5zM6 16a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h5z" />
      <Circle cx={10} cy={20} r={2} />
      <Path d="M9.004 5.917L8.08 17H1v2h6.184c.416-1.164 1.53-2.033 2.902-1.991L10.92 7H13V5h-3a1 1 0 0 0-.996.917z" />
    </G>
  </Svg>
);

export default SvgComponent;
