import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12.055 12.564c-.759-2.685-3.492-1.798-3.492.248 0 2.154 3.383 4.188 3.383 4.188.29-.169 3.492-1.865 3.492-4.188 0-2.046-2.625-2.933-3.383-.248z" />
      <Path d="M20 7h-8.25L10.1 4.8A2.009 2.009 0 0 0 8.5 4H4c-1.103 0-2 .898-2 2v13c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V9c0-1.102-.897-2-2-2zM4 19V6h4.5l1.65 2.2c.375.501.974.8 1.6.8H20l.001 10H4z" />
    </G>
  </Svg>
);

export default SvgComponent;
