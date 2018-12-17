import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zM11 2h2v3h-2zM18.365 4.221l1.414 1.415-2.123 2.122-1.414-1.414zM19 11h3v2h-3zM18.364 19.779l-2.123-2.122 1.413-1.414 2.123 2.122zM11 19h2v3h-2zM5.637 19.778l-1.414-1.413 2.121-2.122 1.414 1.414zM2 11h3v2H2zM5.636 4.222l2.121 2.122-1.415 1.414-2.12-2.122z" />
    </G>
  </Svg>
);

export default SvgComponent;
