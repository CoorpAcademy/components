import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 2c-1.654 0-3 1.346-3 3v11.303l3 4.5 3-4.5V5c0-1.654-1.346-3-3-3zm1 13.698l-1 1.5-1-1.5V8h2v7.698zM19 6V5a1.001 1.001 0 0 1 2 0v1h-2zM13 3H3c-1.103 0-2 .898-2 2v14c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V5c0-1.102-.897-2-2-2zM3 19V5h10l.001 14H3z" />
      <Path d="M5 7h6v2H5zM5 11h6v2H5zM5 15h4v2H5z" />
    </G>
  </Svg>
);

export default SvgComponent;
