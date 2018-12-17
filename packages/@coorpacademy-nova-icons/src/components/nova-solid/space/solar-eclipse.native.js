import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M11 2h2v3h-2zM18.364 4.221l1.414 1.414-2.122 2.122-1.414-1.414zM19 11h3v2h-3zM18.365 19.778l-2.122-2.122 1.413-1.414 2.122 2.122zM11 19h2v3h-2zM5.636 19.778l-1.414-1.413 2.122-2.122 1.414 1.413zM2 11h3v2H2zM5.635 4.222l2.122 2.122-1.414 1.414-2.122-2.122zM12 7c-2.762 0-5 2.238-5 5a5 5 0 1 0 10 0 5 5 0 0 0-5-5zm0 8c-.352 0-.686-.072-1-.184 1.162-.413 2-1.512 2-2.816s-.838-2.403-2-2.816A2.991 2.991 0 0 1 12 9a3 3 0 1 1 0 6z" />
    </G>
  </Svg>
);

export default SvgComponent;
