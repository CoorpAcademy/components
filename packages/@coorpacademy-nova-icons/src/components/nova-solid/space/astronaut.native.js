import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19.356 10.665L14 9a2 2 0 0 0-2 2v4l2 3v4h4a1 1 0 1 0 0-2h-1v-3l-1-1.5v-3.784l2.69.836a1 1 0 0 0 .666-1.887zM16.816 6H15a2 2 0 0 1-2-2h3.816A2.99 2.99 0 0 0 14 2a3 3 0 0 0 0 6 2.99 2.99 0 0 0 2.816-2zM9 7H7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm-1 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
