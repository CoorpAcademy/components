import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M22 3H10a2 2 0 0 0-2 2v1h2V5h12v2h-7v2h6.999l-.002 6H10v-1H8v1c0 1.103.896 2 2 2h6.382l-.724 1.449a.993.993 0 0 1-.894.551h-6.35L6 16.586v-5.172L8.414 9H12v1c0 .551-.449 1-1 1H9v2h2c1.654 0 3-1.346 3-3V8a1 1 0 0 0-1-1H8a.994.994 0 0 0-.707.294L5.46 9.126A.974.974 0 0 0 5 9H1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4c.169 0 .32-.051.46-.126l1.833 1.834c.188.186.441.292.707.292h6.764a2.981 2.981 0 0 0 2.684-1.659L18.618 17H22c1.104 0 2-.897 2-2V5a2 2 0 0 0-2-2zM4 17H2v-6h2v6z"
    />
  </Svg>
);

export default SvgComponent;
