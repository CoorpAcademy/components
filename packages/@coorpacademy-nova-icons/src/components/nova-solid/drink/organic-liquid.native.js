import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 3h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1zM13 11c0-2.85-2.654-4.216-4-4.725V4H5v2.275C3.654 6.784 1 8.15 1 11v8a1 1 0 0 0 1 1h6l5-5v-4zm-6 5c-1.104 0-2-.896-2-2s2-4 2-4 2 2.896 2 4-.896 2-2 2zM21 15.414L19.586 14 18 15.586V14h-2v3.586l-1 1V17h-2v3.586l-1.707 1.707 1.414 1.413L14.414 22H18v-2h-1.586l1-1H21v-2h-1.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
