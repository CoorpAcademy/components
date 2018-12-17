import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M0 18c0 1.103.897 2 2 2h9v2H7.001v2h10v-2h-4v-2h9c1.103 0 2-.897 2-2v-1H0v1zM22 3H2C.897 3 0 3.898 0 5v11h24V5c0-1.102-.897-2-2-2zm-.483 10h-1.543l-.733-2.988-.739 2.928.015.06h-1.543l-1.472-6-1.5 5.94.015.06h-1.543l-.733-2.988-.739 2.928.015.06H9.474L8.002 7l-1.5 5.94.016.06H4.975l-.733-2.988-.74 2.928.016.06H1.975L.502 7h1.5l.739 2.927L3.459 7h1.543l.739 2.927L6.459 7h3.043l.739 2.927L10.958 7h1.543l.739 2.927L13.958 7h3.043l.739 2.927L18.458 7h1.543l.739 2.927L21.458 7h1.543l-1.5 5.94.016.06z" />
    </G>
  </Svg>
);

export default SvgComponent;
