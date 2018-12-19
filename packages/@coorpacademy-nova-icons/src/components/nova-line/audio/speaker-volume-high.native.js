import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11.764 3.152a2.017 2.017 0 0 0-2.178.434L6.479 8H4c-1.103 0-2 .898-2 2v4c0 1.103.897 2 2 2h2.479l2.995 4.28c.416.496.959.72 1.526.72a1.993 1.993 0 0 0 2-2V5c0-.813-.485-1.538-1.236-1.848zM7.521 14H4v-4h3.521L11 5.027l.001 13.948L7.521 14zM15 4v2c2.757 0 5 2.243 5 5s-2.243 5-5 5v2c3.86 0 7-3.14 7-7 0-3.859-3.14-7-7-7z" />
      <Path d="M18 11c0-1.654-1.346-3-3-3v2a1.001 1.001 0 0 1 0 2v2c1.654 0 3-1.346 3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
