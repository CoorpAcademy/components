import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 2C6.486 2 2 6.486 2 12v6a1 1 0 0 0 1 1h2c1.103 0 2-.897 2-2v-2c0-1.104-.897-2-2-2H4v-1c0-4.411 3.589-8 8-8s8 3.589 8 8v1h-1c-1.103 0-2 .896-2 2v2c0 1.103.897 2 2 2h2a1 1 0 0 0 1-1v-6c0-5.514-4.486-10-10-10zM5 15l.001 2H4v-2h1zm15 2h-1v-2h1v2z" />
      <Path d="M14 8h-4c-1.103 0-2 .896-2 2v10c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2V10c0-1.104-.897-2-2-2zm0 2v4h-4v-4h4zm-4 10v-4h4.001v4H10z" />
      <Circle cx={12} cy={18} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
