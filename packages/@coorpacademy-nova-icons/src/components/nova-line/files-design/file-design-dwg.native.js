import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 3.002h10v4h4v1h2V5.587l-4.586-4.585H5c-1.103 0-2 .896-2 2v5h2v-5zM19 21.002H5v-1H3v1c0 1.103.897 2 2 2h14c1.104 0 2-.897 2-2v-1h-2v1zM7 14.002c0-2.206-1.794-4-4-4H1v8h2c2.206 0 4-1.794 4-4zm-4-2a2 2 0 0 1 0 4v-4zM23 12.002v-2h-4c-1.103 0-2 .896-2 2v4c0 1.103.897 2 2 2h2c1.104 0 2-.897 2-2v-3h-3v2h1v1h-2v-4h4zM14.942 10.002l-.957 3.9-.985-3.9h-2.058l-.957 3.9-.985-3.9H7l1.963 8h2.058L11 17.92l.985-3.902.978 3.984h2.058L15 17.92l2-7.918z" />
    </G>
  </Svg>
);

export default SvgComponent;
