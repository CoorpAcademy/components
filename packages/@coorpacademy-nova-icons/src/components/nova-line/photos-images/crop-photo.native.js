import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 16.999h-3v-10c0-1.103-.897-2-2-2H7v-3H5v3H2v2h3v10c0 1.103.897 2 2 2h10v3h2v-3h3v-2zm-15 0v-10h10v10H7z" />
      <Path d="M12 7.999c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
