import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M22 3H2C.897 3 0 3.897 0 5v13c0 1.104.897 2 2 2h9v2H7v2h10v-2h-4v-2h9c1.103 0 2-.896 2-2V5c0-1.103-.897-2-2-2zm-6 12a1 1 0 0 1-.684.949l-3 1c-.103.033-.209.051-.316.051s-.213-.018-.316-.051l-3-1A1 1 0 0 1 8 15v-2.104l3.725 1.064a.958.958 0 0 0 .55.001L16 12.896V15zm3.275-5.039L12 11.96l-6-1.714V14a1 1 0 1 1-2 0V9a.9.9 0 0 1 .127-.46c.131-.25.379-.441.599-.5l7-2a.971.971 0 0 1 .55 0l7 2a.998.998 0 0 1-.001 1.921z"
    />
  </Svg>
);

export default SvgComponent;
