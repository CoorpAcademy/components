import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M.293 7.296L1.707 8.71 4 6.417v15.586h2V6.417L8.293 8.71l1.414-1.414L5 2.589zM21 4.003h-8c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2v-14c0-1.103-.897-2-2-2zm-7 12a3 3 0 0 1 3-3 2 2 0 1 1 .001-4.001A2 2 0 0 1 17 13.003a3 3 0 0 1 3 3h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
