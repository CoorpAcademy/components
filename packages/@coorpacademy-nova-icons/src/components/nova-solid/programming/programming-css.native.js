import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M24 16V5c0-1.102-.897-2-2-2H2C.897 3 0 3.898 0 5v11h24zM17.5 6H21v2h-3.5a.5.5 0 0 0 0 1h1c1.378 0 2.5 1.122 2.5 2.5S19.879 14 18.5 14H15v-2h3.5a.5.5 0 0 0 0-1h-1C16.122 11 15 9.878 15 8.5S16.122 6 17.5 6zM3 9c0-1.654 1.346-3 3-3h3v2H6c-.551 0-1 .449-1 1v2c0 .551.449 1 1 1h6.5a.5.5 0 0 0 0-1h-1C10.122 11 9 9.878 9 8.5S10.122 6 11.5 6H15v2h-3.5a.5.5 0 0 0 0 1h1c1.378 0 2.5 1.122 2.5 2.5S13.879 14 12.5 14H6c-1.654 0-3-1.346-3-3V9zM.001 17v1c0 1.103.897 2 2 2h9v2h-4v2h10v-2h-4v-2h9c1.103 0 2-.897 2-2v-1h-24z" />
    </G>
  </Svg>
);

export default SvgComponent;
