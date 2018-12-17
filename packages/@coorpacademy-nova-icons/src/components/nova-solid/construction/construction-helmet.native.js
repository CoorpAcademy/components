import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M20 16H4a2 2 0 0 0-2 2c6 4 14 4 20 0a2 2 0 0 0-2-2zM20 14c0-3.354-2.071-6.214-5-7.401V14h-1V6a2 2 0 0 0-4 0v8H9V6.599C6.071 7.786 4 10.646 4 14v1h16v-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
