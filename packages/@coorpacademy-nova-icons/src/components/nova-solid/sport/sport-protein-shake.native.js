import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M5 2h14v4H5zM20.414 9.414L18 7H6L3.586 9.414A2.002 2.002 0 0 0 3 10.828V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9.172c0-.53-.211-1.038-.586-1.414zM19 16a1 1 0 0 1-1 1h-1v1a1 1 0 1 1-2 0v-2H9v2a1 1 0 1 1-2 0v-1H6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v2h6v-2a1 1 0 1 1 2 0v1h1a1 1 0 0 1 1 1v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
