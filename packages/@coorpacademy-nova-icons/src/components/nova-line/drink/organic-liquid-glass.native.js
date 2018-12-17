import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15.745.333A.997.997 0 0 0 15 0H1a.997.997 0 0 0-.994 1.11l2 18A1 1 0 0 0 3 20h10a1 1 0 0 0 .994-.89l2-18a1 1 0 0 0-.249-.777zM13.883 2l-.444 4H2.562l-.445-4h11.766zm-1.778 16h-8.21L2.784 8h10.432l-1.111 10zM24 15.414L22.586 14 21 15.586V14h-2v3.586l-1 1V17h-2v3.586l-1.707 1.707 1.414 1.414L17.414 22H21v-2h-1.586l1-1H24v-2h-1.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
