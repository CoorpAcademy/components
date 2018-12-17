import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Circle cx={11} cy={15} r={2} />
      <Path d="M21.707 12.293l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 14h1v9h16v-9h1a.999.999 0 0 0 .707-1.707zm-6.414 8.413l-2.274-2.273A3.95 3.95 0 0 1 11 19c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4c0 .74-.215 1.424-.567 2.019l2.274 2.274-1.414 1.413z" />
    </G>
  </Svg>
);

export default SvgComponent;
