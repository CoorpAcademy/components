import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17 19.586V17h-2v2.586l-2.293-2.293-1.414 1.414L16 23.414l4.707-4.707-1.414-1.414zM10 10h5v3h2v-3a2 2 0 0 0-2-2h-5v2zM3 8h3v2H3z" />
      <Path d="M9 14V4.414l2.293 2.293 1.414-1.414L8 .586 3.293 5.293l1.414 1.414L7 4.414V14c0 1.104.897 2 2 2h12v-2H9z" />
    </G>
  </Svg>
);

export default SvgComponent;
