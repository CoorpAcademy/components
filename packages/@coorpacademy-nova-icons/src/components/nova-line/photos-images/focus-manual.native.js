import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 19.999h-4v2h4c1.103 0 2-.897 2-2v-4h-2v4zM20 1.999h-4v2h4v4h2v-4c0-1.103-.897-2-2-2zM4 3.999h4v-2H4c-1.103 0-2 .897-2 2v4h2v-4zM4 15.999H2v4c0 1.103.897 2 2 2h4v-2H4v-4zM17 16.999v-10a1.002 1.002 0 0 0-1.707-.707L12 9.584 8.707 6.292A.998.998 0 0 0 7 6.999v10h2V9.413l2.293 2.292a.999.999 0 0 0 1.414 0L15 9.413v7.585h2z" />
    </G>
  </Svg>
);

export default SvgComponent;
