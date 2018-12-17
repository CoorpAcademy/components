import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M23 7h-2c0 1.654-1.346 3-3 3h-6.571L8 4 6.5 7h-2a1.5 1.5 0 0 0 0 3H7l1 2v7a1 1 0 1 0 2 0v-1a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v1a1 1 0 1 0 2 0v-7a1.98 1.98 0 0 0-.201-.859A5 5 0 0 0 23 7z" />
      <Path d="M18.47 1.471l1.06 1.061L13.03 9.03l-1.06-1.061z" />
    </G>
  </Svg>
);

export default SvgComponent;
