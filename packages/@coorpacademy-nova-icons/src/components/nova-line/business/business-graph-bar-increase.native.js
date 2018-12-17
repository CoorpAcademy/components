import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 21.999v-13a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v13h-1v-9a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v9H8v-5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5H0v2h24v-2h-2zm-18 0v-4h2v4H4zm7 0v-8h2v8h-2zm7 0v-12h2v12h-2zM3.707 14.706L15 3.414V6h2V0h-6v2h2.586L2.293 13.292z" />
    </G>
  </Svg>
);

export default SvgComponent;
