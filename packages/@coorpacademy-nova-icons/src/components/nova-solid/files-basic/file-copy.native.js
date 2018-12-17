import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.414 1H9c-1.103 0-2 .898-2 2v14c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V5.586L16.414 1zM15 7V2l5 5h-5z" />
      <Path d="M5 5H3v16c0 1.103.897 2 2 2h12v-2H5V5z" />
    </G>
  </Svg>
);

export default SvgComponent;
