import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22.884 2.884l-1.767-1.768L18 4.232l-3.116-3.116-1.767 1.768L16.233 6l-3.116 3.116 1.767 1.768L18 7.768l3.117 3.116 1.767-1.768L19.768 6zM13 22h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1c-4 0-6.937-3.062-7-7h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5c0 6.075 4.925 11 11 11z" />
    </G>
  </Svg>
);

export default SvgComponent;
