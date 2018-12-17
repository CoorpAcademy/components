import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M17.614 14.464L18.382 16H3.618l2-4H13v-2H4.382L1 16.764V22h2c0 1.104.897 2 2 2s2-.896 2-2h8c0 1.104.897 2 2 2s2-.896 2-2h2v-5.236l-1.597-3.194-1.789.894zM3 18h3v2H3v-2zm11 2H8v-2h6v2zm5 0h-3v-2h3v2zM17 9h1c1.654 0 3-1.346 3-3s-1.346-3-3-3h-3v8h2V9zm0-4h1c.551 0 1 .449 1 1s-.449 1-1 1h-1V5z" />
    </G>
  </Svg>
);

export default SvgComponent;
