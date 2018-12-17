import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 5a2 2 0 0 0-2 2v9h4V7a2 2 0 0 0-2-2zM20 21l2-3h-4zM13 3H3c-1.103 0-2 .898-2 2v14c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V5c0-1.102-.897-2-2-2zM9 17H4v-2h5v2zm3-4H4v-2h8v2zm0-4H4V7h8v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
