import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 2C6.486 2 2 6.486 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.514-4.486-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
      <Path d="M9 13v2c0 1.654 1.346 3 3 3h4v-2h-4c-.551 0-1-.448-1-1v-2c0-.551.449-1 1-1h4v-2h-4c-1.654 0-3 1.346-3 3z" />
      <Circle cx={9} cy={8} r={2} />
    </G>
  </Svg>
);

export default SvgComponent;
