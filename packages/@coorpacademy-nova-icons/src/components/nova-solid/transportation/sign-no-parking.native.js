import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.002H0z" />
    <G fill="currentColor">
      <Path d="M10 9.721V7h2c.216 0 .423.04.618.102l2.93-2.929A5.961 5.961 0 0 0 12 3H7a1 1 0 0 0-1 1v9.721l4-4zM21.707 3.671l-1.414-1.414L2.808 19.743l1.414 1.413L6.378 19H9a1 1 0 0 0 1-1v-2.622l.378-.378H12c3.309 0 6-2.691 6-6a5.94 5.94 0 0 0-.182-1.439l3.889-3.89z" />
    </G>
  </Svg>
);

export default SvgComponent;
