import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12.294 9.002H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V13.32a7.008 7.008 0 0 1-3.706-4.318zm-.294 9.5a1.5 1.5 0 1 1-1.5-1.5v-2.771L7 15.372v4.13a1.5 1.5 0 1 1-1.5-1.5v-3.174c0-.326.209-.613.518-.713l5-1.632a.753.753 0 0 1 .983.713v5.306zM22.293 5.295L20 7.587V2.002h-2v5.585l-2.293-2.292-1.414 1.413L19 11.416l4.707-4.708z" />
    </G>
  </Svg>
);

export default SvgComponent;
