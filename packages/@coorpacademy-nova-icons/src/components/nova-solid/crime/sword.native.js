import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M22.707 1.295a.997.997 0 0 0-.871-.279l-6 1a1 1 0 0 0-.636.387l-8.058 10.74L8.47 14.47l9.5-9.5 1.061 1.061-9.5 9.5 1.327 1.327L21.6 8.802a.998.998 0 0 0 .387-.636l1-6a1.004 1.004 0 0 0-.28-.871z" />
      <Path d="M11.192 18.708l-5.898-5.897A1.012 1.012 0 0 1 5 12.102v-2.1H3v2.1c0 .789.32 1.562.879 2.123l1.241 1.24-3.827 3.828a.998.998 0 0 0 0 1.413l2 2a.994.994 0 0 0 1.414 0l3.828-3.828 1.243 1.243c.567.568 1.321.88 2.122.88H14v-2h-2.1a.989.989 0 0 1-.708-.293z" />
    </G>
  </Svg>
);

export default SvgComponent;
