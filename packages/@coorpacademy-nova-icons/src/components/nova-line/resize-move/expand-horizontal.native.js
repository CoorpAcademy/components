import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18.293 9.707L19.586 11H14v2h5.586l-1.293 1.293 1.414 1.414L23.414 12l-3.707-3.707zM5.707 9.707L4.293 8.293.586 12l3.707 3.707 1.414-1.414L4.414 13H10v-2H4.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
