import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={8} cy={22} r={2} />
      <Circle cx={16} cy={22} r={2} />
      <Path d="M20 3.999c-.466 0-.87.322-.975.776L18.05 9H14v2h3.589l-1.384 6H7.781l-.75-3H4.969l1.061 4.243A1 1 0 0 0 7 19h10a1 1 0 0 0 .975-.775l2.821-12.227H24v-2h-4z" />
      <Path d="M11 11V8L9 6v4H5V6L3 8v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z" />
      <Path d="M12.293 7.707l1.414-1.414-6-6a.999.999 0 0 0-1.414 0l-6 6 1.414 1.414L7 2.414l5.293 5.293z" />
    </G>
  </Svg>
);

export default SvgComponent;
