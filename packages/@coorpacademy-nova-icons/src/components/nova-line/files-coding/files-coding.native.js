import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10.293 10.299l-3.707 3.707 3.707 3.708 1.414-1.415-2.293-2.293 2.293-2.292zM12.293 11.714l2.293 2.292-2.293 2.293 1.414 1.415 3.707-3.708-3.707-3.707z" />
      <Path d="M16.414 1.003H5c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.59l-4.586-4.587zM5 21.003v-18h10v4h4l.001 14H5z" />
    </G>
  </Svg>
);

export default SvgComponent;
