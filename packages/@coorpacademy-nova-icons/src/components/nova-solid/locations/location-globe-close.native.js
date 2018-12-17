import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M20 10c0-4.1-2.47-7.619-6-9.162V4h-3v3h3v3l-3 1-2 5-5-3V7l3-2V.459C2.943 1.734 0 5.523 0 10c0 5.523 4.477 10 10 10a9.946 9.946 0 0 0 4.07-.872 5.995 5.995 0 0 1 5.058-5.058A9.942 9.942 0 0 0 20 10zM23.707 17.706l-1.414-1.413L20 18.586l-2.293-2.293-1.414 1.413L18.586 20l-2.293 2.293 1.414 1.413L20 21.414l2.293 2.292 1.414-1.413L21.414 20z" />
    </G>
  </Svg>
);

export default SvgComponent;
