import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 4v5.535l3.445 2.297 1.11-1.664L10 8.465V4z" />
      <Path d="M17.94 10c.037-.329.06-.662.06-1 0-4.962-4.037-9-9-9S0 4.038 0 9s4.038 9 9 9a8.947 8.947 0 0 0 5-1.522V13.89A6.975 6.975 0 0 1 9 16c-3.86 0-7-3.14-7-7s3.14-7 7-7c3.859 0 7 3.14 7 7 0 .341-.033.673-.08 1h2.02zM20 12c-2.206 0-4 1.794-4 4h2c0-1.104.897-2 2-2s2 .896 2 2c0 1.103-.897 2-2 2h-1v3h2v-1.126A4.008 4.008 0 0 0 24 16c0-2.206-1.794-4-4-4z" />
      <Circle cx={20} cy={23} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
