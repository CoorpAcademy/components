import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7 7h2v2H7zM15 7h2v2h-2zM2 8v2h2V9h1V7H3a1 1 0 0 0-1 1zM21 7h-2v2h1v1h2V8a1 1 0 0 0-1-1zM7 15h2v2H7zM15 15h2v2h-2zM4 14H2v2a1 1 0 0 0 1 1h2v-2H4v-1zM20 15h-1v2h2a1 1 0 0 0 1-1v-2h-2v1z" />
      <Path d="M12 3.382A3.975 3.975 0 0 0 9 2H7v2h2c1.103 0 2 .897 2 2v6H9v2h2v4c0 1.103-.897 2-2 2H7v2h2c1.2 0 2.266-.542 3-1.382.734.84 1.8 1.382 3 1.382h2v-2h-2c-1.103 0-2-.897-2-2v-4h2v-2h-2V6c0-1.103.897-2 2-2h2V2h-2c-1.2 0-2.266.542-3 1.382z" />
    </G>
  </Svg>
);

export default SvgComponent;
