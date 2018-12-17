import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M8 14H4c-1.103 0-2 .898-2 2v4c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2v-4c0-1.102-.897-2-2-2zM20 2h-4c-1.103 0-2 .898-2 2v4c0 1.102.897 2 2 2h4c1.103 0 2-.898 2-2V4c0-1.102-.897-2-2-2zM11.208 14.207l-1.414-1.413 3-3.001 1.414 1.413z" />
    </G>
  </Svg>
);

export default SvgComponent;
