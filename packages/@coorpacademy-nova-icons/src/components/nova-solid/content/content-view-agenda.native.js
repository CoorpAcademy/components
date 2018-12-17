import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .003h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 2H4c-1.103 0-2 .898-2 2v5c0 1.102.897 2 2 2h16c1.104 0 2-.898 2-2V4c0-1.102-.896-2-2-2zM20 13H4c-1.103 0-2 .898-2 2v5c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2v-5c0-1.102-.896-2-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
