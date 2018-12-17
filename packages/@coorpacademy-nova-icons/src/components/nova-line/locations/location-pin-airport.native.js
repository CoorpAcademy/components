import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M12.17 10.709L10.901 14l1.496-.777 1.825-3.333 2.274-1.003a.83.83 0 0 0 .447-.467.842.842 0 0 0-1.098-1.083l-2.335 1.04-2.766-1.751-1.337.692 2.597 1.686h.098l-2.025.901-1.75-.783-1.319.76 3.331 1.671 1.831-.844z" />
      <Path d="M18 2H6c-1.103 0-2 .898-2 2v11c0 1.103.897 2 2 2h2.434L12 22.943 15.566 17H18c1.103 0 2-.897 2-2V4c0-1.102-.897-2-2-2zm0 13h-3.566L12 19.057 9.566 15H6V4h12v11z" />
    </G>
  </Svg>
);

export default SvgComponent;
