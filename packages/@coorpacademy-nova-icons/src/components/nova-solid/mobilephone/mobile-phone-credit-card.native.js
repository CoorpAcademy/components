import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.004h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 20v-2H4V6h8v5h2V4c0-1.103-.896-2-2-2H4c-1.103 0-2 .897-2 2v16c0 1.104.897 2 2 2h4.557A3.953 3.953 0 0 1 8 20z" />
      <Path d="M20 13h-8a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2zm-7 7h-1v-2h1v2zm7 0h-5v-2h5v2zm0-4h-8v-1h8v1z" />
    </G>
  </Svg>
);

export default SvgComponent;
