import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M23.707 11.293l-10-10a.999.999 0 0 0-1.414 0l-10 10a.999.999 0 0 0 0 1.414l10 10a.997.997 0 0 0 1.414 0l10-10a.999.999 0 0 0 0-1.414zM13 20.586L4.414 12 13 3.414 21.586 12 13 20.586z" />
      <Path d="M10 10v7h2v-7c0-.551.449-1 1-1s1 .449 1 1v2h-1l2 3 2-3h-1v-2c0-1.654-1.346-3-3-3s-3 1.346-3 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
