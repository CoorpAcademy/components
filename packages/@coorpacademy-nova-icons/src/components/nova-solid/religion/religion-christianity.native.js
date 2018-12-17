import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M10 15h3V8h3V5h-3V2h-3v3H7v3h3zM6 16h11v2H6zM20 19H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
