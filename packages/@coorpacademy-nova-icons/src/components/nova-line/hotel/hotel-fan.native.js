import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M20 10c0-4.411-3.589-8-8-8s-8 3.589-8 8c0 4.073 3.06 7.436 7 7.931V21H7v2h10v-2h-4v-3.069c3.94-.495 7-3.858 7-7.931zM6 10c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6z" />
      <Path d="M12.51 10.841l2.01 3.315c1.309-.767 2.408-2.307 2.405-4.156H13a.986.986 0 0 0-.513-.855l1.95-3.424c-1.605-.918-3.487-.723-4.803.033l1.886 3.385A.99.99 0 0 0 11 10H7.074c-.002 1.849 1.098 3.389 2.406 4.156l2.01-3.315c.344.208.663.217 1.02 0z" />
    </G>
  </Svg>
);

export default SvgComponent;
