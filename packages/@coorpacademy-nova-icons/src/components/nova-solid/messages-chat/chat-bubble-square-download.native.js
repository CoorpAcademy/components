import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12.292 7.001H1.998c-1.104 0-2 .897-2 2v9c0 1.103.896 2 2 2h1v4l5.334-4h6.666c1.104 0 2-.897 2-2v-6.294a7.007 7.007 0 0 1-4.706-4.706zM22.291 3.293l-2.293 2.293V0h-2v5.586l-2.293-2.293-1.414 1.414 4.707 4.707 4.707-4.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
