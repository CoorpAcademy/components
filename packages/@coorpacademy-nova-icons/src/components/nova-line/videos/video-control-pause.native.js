import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 2H7c-1.103 0-2 .896-2 2v14c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2V4c0-1.104-.897-2-2-2zM7 18V4h2l.001 14H7zM17 2h-2c-1.103 0-2 .896-2 2v14c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2V4c0-1.104-.897-2-2-2zm-2 16V4h2l.001 14H15z" />
    </G>
  </Svg>
);

export default SvgComponent;
