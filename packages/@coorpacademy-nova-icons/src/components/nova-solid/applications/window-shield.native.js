import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 2a2 2 0 0 0-2-2H2C.897 0 0 .896 0 2v2.002h20V2zM3 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM20 9V5.002H0V16c0 1.103.897 2 2 2h8v-7a2 2 0 0 1 2-2h8z" />
      <Path d="M12 11v7c0 3.812 3.797 5.579 5.804 5.98l.196.04.196-.039C20.203 23.579 24 21.812 24 18v-7H12zm9 7h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
