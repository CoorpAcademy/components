import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7.465 18.279l7.414-7.414c.858-.859 2.199-1.064 3.292-.622l1.536-1.536A.996.996 0 0 0 20 8V1a1 1 0 0 0-1-1h-7a.997.997 0 0 0-.707.293l-11 11a.999.999 0 0 0 0 1.414l7 7a.997.997 0 0 0 1.414 0l.093-.093-1.335-1.335zM15 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM17.707 12.293a.999.999 0 0 0-1.414 0l-6 6 1.414 1.414L13 18.414V23a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4.586l1.293 1.293 1.414-1.414-6-6zM18 22h-2v-3h2v3z" />
    </G>
  </Svg>
);

export default SvgComponent;
