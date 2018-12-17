import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M20 10c0-4.1-2.47-7.619-6-9.162V4h-3v3h3v3l-3 1-2 5-5-3V7l3-2V.46C2.943 1.734 0 5.523 0 10c0 5.523 4.477 10 10 10a9.946 9.946 0 0 0 5.256-1.504 4.973 4.973 0 0 1 3.24-3.239A9.952 9.952 0 0 0 20 10zM17 19h6v2h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
