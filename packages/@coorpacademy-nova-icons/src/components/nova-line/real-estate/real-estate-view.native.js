import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M21.707 12.293l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 14h2v8a1 1 0 0 0 1 1h7v-2H7v-8a1 1 0 0 0-1-1h-.586L12 5.414 18.586 12H18a1 1 0 0 0-1 1v4h2v-3h2a1 1 0 0 0 .707-1.707z" />
      <Path d="M16 16c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4c.739 0 1.424-.215 2.019-.566L17 22.414 18.414 21l-2.981-2.981A3.947 3.947 0 0 0 16 16zm-4 2c-1.103 0-2-.897-2-2 0-1.104.897-2 2-2s2 .896 2 2c0 1.103-.897 2-2 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
