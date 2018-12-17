import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M23.333 10.667h-3.5L18.667 8 17.5 10.667H14l2.8 2.271L15.867 16l2.8-2.104 2.8 2.104-.934-3.062z" />
      <Path d="M10 12c0-4.1 2.47-7.619 6-9.162A9.957 9.957 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10a9.94 9.94 0 0 0 4-.838C12.47 19.619 10 16.1 10 12z" />
    </G>
  </Svg>
);

export default SvgComponent;
