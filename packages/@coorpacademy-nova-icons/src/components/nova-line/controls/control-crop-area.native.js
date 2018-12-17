import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19.293 17.293L17 19.586V17h-2v2.586l-2.293-2.293-1.414 1.414L16 23.414l4.707-4.707zM3 8h3v2H3zM15 13h2v-3a2 2 0 0 0-2-2h-5v2h5v3z" />
      <Path d="M9 14V4.414l2.293 2.293 1.414-1.414L8 .586 3.293 5.293l1.414 1.414L7 4.414V14a2 2 0 0 0 2 2h12v-2H9z" />
    </G>
  </Svg>
);

export default SvgComponent;
