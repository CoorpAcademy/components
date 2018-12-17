import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 15.423V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.104.897 2.001 2 2.001h13.422a4.962 4.962 0 0 1-.422-2 4.995 4.995 0 0 1 3-4.578zM12 1l5 5h-5V1zm3 18H3V8h2v5.586l2.293-2.293a.999.999 0 0 1 1.414 0L11 13.586l2.293-2.293 1.414 1.413-3 3a.999.999 0 0 1-1.414 0L8 13.414l-3 3V17h10v2zM17 19.001h6v2.001h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
