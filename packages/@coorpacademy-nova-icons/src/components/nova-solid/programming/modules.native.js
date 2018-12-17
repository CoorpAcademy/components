import React from "react";
import Svg, { Path, G, Ellipse } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Ellipse cx={12} cy={8.5} rx={3} ry={1.5} />
      <Ellipse cx={6} cy={6.5} rx={3} ry={1.5} />
      <Ellipse cx={18} cy={6.5} rx={3} ry={1.5} />
      <Ellipse cx={12} cy={4.5} rx={3} ry={1.5} />
      <G>
        <Path d="M11 11.612L3.317 9.051a.999.999 0 0 0-.901.139A.997.997 0 0 0 2 10v8a1 1 0 0 0 .684.949L11 21.72V11.612zM21.585 9.19a1 1 0 0 0-.901-.139L13 11.612V21.72l8.316-2.771A1 1 0 0 0 22 18v-8a.996.996 0 0 0-.415-.81z" />
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
