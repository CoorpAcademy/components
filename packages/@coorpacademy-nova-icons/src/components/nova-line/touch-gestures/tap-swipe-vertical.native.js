import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 13v-3a1 1 0 0 0-1-1H6V8a1 1 0 0 0-1.447-.894l-4 2A.998.998 0 0 0 0 10v6a1 1 0 0 0 1 1h5a1 1 0 0 0 .949-.684L7.721 14H11a1 1 0 0 0 1-1zm-2-1H7a1 1 0 0 0-.949.684L5.279 15H2v-4.381l2-1V10a1 1 0 0 0 1 1h5v1z" />
      <Path d="M12.427 5.695l-.901 1.785A4.484 4.484 0 0 1 14 11.5a4.492 4.492 0 0 1-2.418 3.991l.927 1.772A6.484 6.484 0 0 0 16 11.5a6.474 6.474 0 0 0-3.573-5.805zM18 5.414V9h2V5.414l1.293 1.293 1.414-1.414L19 1.586l-3.707 3.707 1.414 1.414zM20 17.586V14h-2v3.586l-1.293-1.293-1.414 1.414L19 21.414l3.707-3.707-1.414-1.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
