import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 6.008V10h2V4.594L13.414.009H2c-1.103 0-2 .896-2 2v18c0 1.102.897 2 2 2h10v-2H2v-18h10v4h4zM21.986 19.865a2.991 2.991 0 0 0-2.852-2.852l2.852 2.852z" />
      <Path d="M17 12v1c-.539 0-1.038.154-1.475.403L17.121 15H21v-2h-2v-1h-2zM15 21v2h2v1h2v-1c.539 0 1.038-.154 1.475-.404L18.879 21H15zM14.014 16.135a2.991 2.991 0 0 0 2.852 2.852l-2.852-2.852zM12.293 13.706l1.414-1.414 9.998 10.002-1.413 1.413z" />
    </G>
  </Svg>
);

export default SvgComponent;
