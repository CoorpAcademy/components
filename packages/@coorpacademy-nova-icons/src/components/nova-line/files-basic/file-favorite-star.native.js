import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17 13h-3.5l-1.493-4-1.507 4H7l3 1.998L8.5 19l3.5-2.498L15.5 19 14 14.998z" />
      <Path d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM5 21V3h10v4h4l.001 14H5z" />
    </G>
  </Svg>
);

export default SvgComponent;
