import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5c0-1.103-.896-2-2-2zm-7 15a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
      <Path d="M12 8c-2.206 0-4 1.794-4 4 0 2.207 1.794 4 4 4s4-1.793 4-4c0-2.205-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2c0 1.104-.897 2-2 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
