import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.004h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 10.002a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1l2 2v-8l-2 2H9zM14.428 9.65l-.781 1.281c.378.231.604.63.604 1.07 0 .443-.227.844-.607 1.072l.773 1.285a2.766 2.766 0 0 0 1.334-2.357 2.737 2.737 0 0 0-1.323-2.351z" />
      <Path d="M17 1.002a1 1 0 0 0-1-1H7.984A.983.983 0 0 0 7 .986v.016c0 3-3 2-3 6v10c0 4 3 3 3 6a1 1 0 0 0 1 1h8.016a.984.984 0 0 0 .984-.984v-.016c0-3 3-2 3-6v-10c0-4-3-3-3-6zm1 16c0 1.103-.897 2-2 2H8c-1.102 0-2-.897-2-2v-10c0-1.103.898-2 2-2h8c1.103 0 2 .897 2 2v10z" />
    </G>
  </Svg>
);

export default SvgComponent;
