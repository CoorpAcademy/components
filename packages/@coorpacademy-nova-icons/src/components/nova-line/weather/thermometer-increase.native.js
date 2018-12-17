import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 5c0-1.654-1.346-3-3-3S4 3.346 4 5v9.152A4.5 4.5 0 0 0 2.5 17.5C2.5 19.982 4.519 22 7 22s4.5-2.018 4.5-4.5a4.5 4.5 0 0 0-1.5-3.348V5zM7 20a2.503 2.503 0 0 1-2.5-2.5c0-.812.401-1.577 1.073-2.048L6 15.153V5c0-.551.449-1 1-1s1 .449 1 1v10.154l.427.299A2.502 2.502 0 0 1 9.5 17.5C9.5 18.879 8.378 20 7 20zM21.707 7.293L17 2.586l-4.707 4.707 1.414 1.414L16 6.414V13h2V6.414l2.293 2.293zM16 14h2v2h-2zM16 17h2v2h-2zM16 20h2v2h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
