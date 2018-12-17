import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M15.793 9.123l-1.243 1.598c1.46.874 2.45 2.455 2.45 4.277C17 17.757 14.757 20 12 20s-5-2.243-5-5.002c0-1.822.99-3.403 2.45-4.277L8.207 9.123A6.997 6.997 0 0 0 5 14.998C5 18.859 8.141 22 12 22s7-3.141 7-7.002a6.997 6.997 0 0 0-3.207-5.875z" />
      <Path d="M11.2 10.599a1.001 1.001 0 0 0 1.6 0l3-3.999a.999.999 0 0 0 .095-1.047l-1-2A1.001 1.001 0 0 0 14 3h-4a.998.998 0 0 0-.894.553l-1 2A.999.999 0 0 0 8.2 6.6l3 3.999z" />
    </G>
  </Svg>
);

export default SvgComponent;
