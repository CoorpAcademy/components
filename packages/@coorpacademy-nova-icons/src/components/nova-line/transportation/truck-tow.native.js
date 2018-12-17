import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 10c-1.103 0-2-.896-2-2h-2c0 2.205 1.794 4 4 4s4-1.795 4-4a4.008 4.008 0 0 0-3-3.873V3h2V1h-6.489L9.358 8.911l-.409-1.227A1 1 0 0 0 8 7H5c-2.206 0-4 1.795-4 4v8a1 1 0 0 0 1 1h2.185c.414 1.162 1.513 2 2.815 2s2.401-.838 2.815-2h3.369c.414 1.162 1.514 2 2.815 2s2.401-.838 2.815-2H20a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-9.279l-.603-1.809L16.489 3H18v3h1c1.103 0 2 .896 2 2s-.897 2-2 2zM7 20c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm9 0c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm3-5v3h-.185c-.414-1.162-1.514-2-2.815-2s-2.401.838-2.815 2h-3.37C9.401 16.838 8.302 16 7 16s-2.401.838-2.815 2H3v-7c0-1.104.897-2 2-2h2.279l1.772 5.316A1 1 0 0 0 10 15h9z" />
      <Path d="M4 10v3h3l-1-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
