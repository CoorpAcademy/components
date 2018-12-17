import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001.001H24v24.001H-.001z" />
    <G fill="currentColor">
      <Path d="M4 11h16a3 3 0 0 0-3-3 2.96 2.96 0 0 0-.897.152C15.199 6.854 13.701 6 12 6s-3.199.854-4.102 2.152A2.977 2.977 0 0 0 7 8a3 3 0 0 0-3 3zM11 2h2v3h-2zM4.707 3.293l2 2-1.414 1.413-2-2zM19.292 3.292l1.414 1.414-2 2-1.413-1.414zM20 12H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1zm-8.001 1.498a1.001 1.001 0 1 1 0 2.003 1.001 1.001 0 0 1 0-2.003zM18 19H6v-4h3v2h6v-2h3v4z" />
    </G>
  </Svg>
);

export default SvgComponent;
