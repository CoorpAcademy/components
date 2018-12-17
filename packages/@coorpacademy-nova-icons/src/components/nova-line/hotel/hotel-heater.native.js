import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M20 10H4c-1.103 0-2 .896-2 2v8c0 1.103.897 2 2 2v2h3v-2h10v2h3v-2c1.103 0 2-.897 2-2v-8c0-1.104-.897-2-2-2zm0 10H4v-8h16l.001 8H20z" />
      <Path d="M12 14h2v4h-2zM16 14h2v4h-2z" />
      <Circle cx={7} cy={15} r={2} />
      <Path d="M5.9 7.2l1.2 1.6c2.8-2.1 1.434-3.922.7-4.9-.745-.993-.9-1.2.3-2.1L6.9.2c-2.8 2.1-1.434 3.922-.7 4.9.745.993.9 1.2-.3 2.1zM10.9 7.2l1.2 1.6c2.8-2.1 1.434-3.922.7-4.9-.745-.993-.9-1.2.3-2.1L11.9.2c-2.8 2.1-1.434 3.921-.7 4.9.745.993.9 1.2-.3 2.1zM15.9 7.2l1.2 1.6c2.8-2.1 1.434-3.922.7-4.9-.745-.993-.9-1.2.3-2.1L16.9.2c-2.8 2.1-1.434 3.921-.7 4.9.745.993.9 1.2-.3 2.1z" />
    </G>
  </Svg>
);

export default SvgComponent;
