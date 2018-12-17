import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.004h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9.999-.001h-8c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h8c1.103 0 2-.896 2-2v-16c0-1.103-.897-2-2-2zm0 2v2h-8v-2h8zm0 4v8h-8v-8h8zm-8 12v-2H10v2H1.999zM23 14.999c0-2.205-1.794-4-4-4s-4 1.795-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-4-2c1.103 0 2 .896 2 2h-4c0-1.103.897-2 2-2zm3 9h-6v-5h6v5z" />
      <Circle cx={19} cy={18.999} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
