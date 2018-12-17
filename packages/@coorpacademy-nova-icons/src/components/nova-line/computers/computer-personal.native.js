import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 5h-3c-1.103 0-2 .896-2 2v10c0 1.103.897 2 2 2h3c1.103 0 2-.897 2-2V7c0-1.104-.897-2-2-2zm-3 12V7h3l.001 10H18zM13 5H3c-1.103 0-2 .896-2 2v7c0 1.103.897 2 2 2h4v1H5v2h6v-2H9v-1h4c1.103 0 2-.897 2-2V7c0-1.104-.897-2-2-2zM3 14V7h10l.001 7H3z" />
    </G>
  </Svg>
);

export default SvgComponent;
