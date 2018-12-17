import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6 17l7-4-7-4z" />
      <Path d="M2 2h10v4h4v4.004h2V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h7v-2H2V2zM23.707 14.293l-3-3a.999.999 0 0 0-1.414 0l-7 7a.997.997 0 0 0-.263.465l-1 4a1 1 0 0 0 1.213 1.213l4-1a.991.991 0 0 0 .464-.264l7-7a.999.999 0 0 0 0-1.414zm-8.218 6.805l-2.114.528.528-2.114L17 16.414 18.586 18l-3.097 3.098zM20 16.586L18.414 15 20 13.414 21.586 15 20 16.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
