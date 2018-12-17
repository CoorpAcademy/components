import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6.707 15.707l-1.414-1.414L.586 19l4.707 4.706 1.414-1.413L4.414 20H22v-2H4.414zM11 0C8.243 0 6 2.243 6 5s2.243 5 5 5h2v6h2V2h2v14h2V2h3V0H11zm2 8h-2C9.346 8 8 6.654 8 5s1.346-3 3-3h2v6z" />
    </G>
  </Svg>
);

export default SvgComponent;
