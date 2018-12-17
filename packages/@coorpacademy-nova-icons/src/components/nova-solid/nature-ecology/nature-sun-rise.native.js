import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 1h2v3h-2zM18.364 3.221l1.414 1.414-2.122 2.122-1.414-1.414zM19 10h3v2h-3zM2 10h3v2H2zM5.635 3.222l2.122 2.122-1.414 1.414-2.122-2.122zM8 12h8a1 1 0 0 0 1-1 5 5 0 1 0-10 0 1 1 0 0 0 1 1zM22 15h-2c0 1.103-.897 2-2 2s-2-.897-2-2h-2c0 1.103-.897 2-2 2s-2-.897-2-2H8c0 1.103-.897 2-2 2s-2-.897-2-2H2c0 1.103-.897 2-2 2v2c1.2 0 2.266-.542 3-1.383C3.734 18.458 4.8 19 6 19s2.266-.542 3-1.383c.734.841 1.8 1.383 3 1.383s2.266-.542 3-1.383c.734.841 1.8 1.383 3 1.383s2.266-.542 3-1.383A3.973 3.973 0 0 0 24 19v-2c-1.103 0-2-.897-2-2zM22 20h-2c0 1.103-.897 2-2 2s-2-.897-2-2h-2c0 1.103-.897 2-2 2s-2-.897-2-2H8c0 1.103-.897 2-2 2s-2-.897-2-2H2c0 1.103-.897 2-2 2v2c1.2 0 2.266-.542 3-1.383C3.734 23.458 4.8 24 6 24s2.266-.542 3-1.383c.734.841 1.8 1.383 3 1.383s2.266-.542 3-1.383c.734.841 1.8 1.383 3 1.383s2.266-.542 3-1.383A3.973 3.973 0 0 0 24 24v-2c-1.103 0-2-.897-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
