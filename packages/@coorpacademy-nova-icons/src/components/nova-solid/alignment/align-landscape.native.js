import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8.707 15.71l-1.414-1.414-4.707 4.707 4.707 4.707 1.414-1.414-2.293-2.293H22v-2H6.414zM20 .003H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2zm-10 10a3 3 0 0 1 3-3 2 2 0 1 1 .001-4.001A2 2 0 0 1 13 7.003a3 3 0 0 1 3 3h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
