import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M9.065 11.687L7 15h10l-3.727-5.979-2.935 4.708z" />
      <Path d="M6 17V8H4v9c0 1.103.897 2 2 2h17v-2H6z" />
      <Path d="M18 16h2V7c0-1.102-.897-2-2-2H1v2h17v9zM4 1h2v3H4zM18 20h2v3h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
