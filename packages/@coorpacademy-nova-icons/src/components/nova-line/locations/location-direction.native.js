import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M12 3l-4 9 4-2 4 2zM12 12c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5zm0 8a3.001 3.001 0 0 1 0-6 3.001 3.001 0 0 1 0 6z" />
    </G>
  </Svg>
);

export default SvgComponent;
