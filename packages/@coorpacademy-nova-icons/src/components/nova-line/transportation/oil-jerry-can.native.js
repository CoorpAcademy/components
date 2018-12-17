import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M20 2h-7c-1.103 0-2 .896-2 2v2h-1c-.265 0-.52.106-.707.293l-5 5A.996.996 0 0 0 4 12v7c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3V4c0-1.104-.897-2-2-2zm0 2v2h-7V4h7zm-1 16H7c-.551 0-1-.449-1-1v-6.586L10.414 8H20v11c0 .551-.449 1-1 1zM5.379 4.5L7.5 6.621 4.257 9.865 2.135 7.743z" />
      <Path d="M17.293 9.293L14 12.586l-3.293-3.293-1.414 1.414L12.586 14l-3.293 3.293 1.414 1.414L14 15.414l3.293 3.293 1.414-1.414L15.414 14l3.293-3.293z" />
    </G>
  </Svg>
);

export default SvgComponent;
