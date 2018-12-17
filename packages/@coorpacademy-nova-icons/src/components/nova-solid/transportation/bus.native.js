import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001-.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M18 3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 4 0h8a2 2 0 0 0 4 0V5a2 2 0 0 0-2-2zM6 7h12v7H6V7zm1.5 12a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 7.5 19zm7.5-1.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 15 17.5zM21 8h2v4h-2zM1 8h2v4H1z" />
    </G>
  </Svg>
);

export default SvgComponent;
