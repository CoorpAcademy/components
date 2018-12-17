import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.316 14.052L15 13.279V10a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v5H9a1 1 0 0 0-.929 1.372l2 5c.153.379.52.628.929.628h6a1 1 0 0 0 1-1v-6a.998.998 0 0 0-.684-.948zM16 20h-4.323l-1.2-3H11a1 1 0 0 0 1-1v-5h1v3a1 1 0 0 0 .684.949l2.316.772V20z" />
      <Path d="M12.5 6a5.474 5.474 0 0 1 5.36 4.258l1.948-.45C19.019 6.389 16.013 4 12.5 4S5.981 6.389 5.192 9.808l1.948.45A5.474 5.474 0 0 1 12.5 6z" />
    </G>
  </Svg>
);

export default SvgComponent;
