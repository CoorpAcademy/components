import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M9 15v-4H6v5a2 2 0 0 0 2 2h14v-3H9zM6 1h3v3H6z" />
      <Path d="M15 13h3V8a2 2 0 0 0-2-2H2v3h13v4zM15 20h3v3h-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
