import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M18 12a6.99 6.99 0 0 1 1.742.227c.164-.716.258-1.46.258-2.227 0-4.1-2.47-7.619-6-9.162V4h-3v3h3v3l-3 1-2 5-5-3V7l3-2V.46C2.943 1.734 0 5.523 0 10c0 5.523 4.477 10 10 10 .362 0 .719-.021 1.07-.059A7.124 7.124 0 0 1 11 19a7 7 0 0 1 7-7zM18 14.585l-4.707 4.707 1.414 1.414L17 18.413V24h2v-5.587l2.293 2.293 1.414-1.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
