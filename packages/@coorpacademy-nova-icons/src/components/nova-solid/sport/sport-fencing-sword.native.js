import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M21.243 4.172l-1.414-1.415L7.557 15.029a3.992 3.992 0 0 0-4.85.607l5.657 5.656c1.317-1.315 1.51-3.315.607-4.85l12.272-12.27zM2 20.586A1 1 0 1 0 3.415 22l2.146-2.146-1.414-1.414L2 20.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
