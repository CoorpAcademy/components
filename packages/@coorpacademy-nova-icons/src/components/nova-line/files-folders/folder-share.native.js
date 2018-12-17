import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13.5 13a1.5 1.5 0 1 0 0-3c-.702 0-1.287.485-1.451 1.137l-2.964 1.482a1.5 1.5 0 1 0 0 2.762l2.964 1.482A1.497 1.497 0 0 0 15 16.5a1.5 1.5 0 0 0-1.5-1.5c-.394 0-.749.155-1.017.403l-2.499-1.25c.006-.05.016-.1.016-.153s-.01-.102-.016-.153l2.499-1.25c.268.248.623.403 1.017.403z" />
      <Path d="M20 7h-8.25L10.1 4.8A2.009 2.009 0 0 0 8.5 4H4c-1.103 0-2 .898-2 2v13c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V9c0-1.102-.897-2-2-2zM4 19V6h4.5l1.65 2.2c.375.501.974.8 1.6.8H20l.001 10H4z" />
    </G>
  </Svg>
);

export default SvgComponent;
