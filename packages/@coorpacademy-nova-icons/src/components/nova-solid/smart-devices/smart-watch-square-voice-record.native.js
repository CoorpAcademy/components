import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.004h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17 1.001a1 1 0 0 0-1-1H7.984A.983.983 0 0 0 7 .985v.016c0 3-3 2-3 6v10c0 4 3 3 3 6a1 1 0 0 0 1 1h8.016a.984.984 0 0 0 .984-.984v-.016c0-3 3-2 3-6v-10c0-4-3-3-3-6zm1 16c0 1.104-.897 2-2 2H8c-1.102 0-2-.896-2-2v-10c0-1.103.898-2 2-2h8c1.103 0 2 .897 2 2v10z" />
      <Path d="M12 12.001a1 1 0 0 0 1-1v-2a1 1 0 1 0-2 0v2a1 1 0 0 0 1 1z" />
      <Path d="M12 13.251c-1.24 0-2.25-1.01-2.25-2.25h-1.5c0 1.719 1.17 3.156 2.75 3.598v1.402h2v-1.402c1.58-.441 2.75-1.879 2.75-3.598h-1.5c0 1.24-1.01 2.25-2.25 2.25z" />
    </G>
  </Svg>
);

export default SvgComponent;
