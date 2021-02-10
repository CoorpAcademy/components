import * as React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill={props.color}>
      <Path d="M18 14V9A6 6 0 106 9v5a3 3 0 01-3 3v1h18v-1a3 3 0 01-3-3zM8.555 19c.693 1.19 1.969 2 3.445 2s2.752-.81 3.445-2h-6.89z" />
    </G>
  </Svg>
);

export default SvgComponent;
