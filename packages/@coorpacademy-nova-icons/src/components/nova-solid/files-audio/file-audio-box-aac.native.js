import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11.125 10.756h1.75v1.75h-1.75zM5.002 10.756h1.749v1.75H5.002z" />
      <Path d="M22 6.006H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2zM8.501 16.004h-1.75v-1.75H5.002v1.75h-1.75V9.881c0-.483.391-.875.875-.875h3.499c.483 0 .875.392.875.875v6.123zm6.123 0h-1.749v-1.75h-1.75v1.75H9.376V9.881c0-.483.391-.875.874-.875h3.5c.483 0 .874.392.874.875v6.123zm6.124-5.246h-2.624a.875.875 0 0 0-.875.875v1.749c0 .483.392.875.875.875h2.624v1.75h-2.624a2.627 2.627 0 0 1-2.625-2.625v-1.749a2.627 2.627 0 0 1 2.625-2.624h2.624v1.749z" />
    </G>
  </Svg>
);

export default SvgComponent;
