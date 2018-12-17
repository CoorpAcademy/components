import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M11 15.006l.009-.003H6v-.586l2-2 1.293 1.293a.997.997 0 0 0 1.414 0l3-3-1.414-1.414L10 11.59l-1.293-1.294a1 1 0 0 0-1.414 0L6 11.59V8.003H4v9h7v-1.997z"
      fill="currentColor"
    />
    <Path
      d="M9 20.002H2V2h10v4h4l.001 5.006H18v-6.42L13.414 0H2C.897 0 0 .897 0 2v18.002c0 1.102.897 2 2 2h7v-2zM23.707 14.294l-3-3a1 1 0 0 0-1.414 0l-7 7a1.001 1.001 0 0 0-.263.465l-1 4a1 1 0 0 0 1.213 1.213l4-1a1 1 0 0 0 .464-.264l7-7a.999.999 0 0 0 0-1.414zm-8.218 6.805l-2.114.528.528-2.114L17 16.416l1.586 1.586-3.097 3.097zM20 16.587l-1.586-1.585L20 13.416l1.586 1.586L20 16.587z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
