import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6.618 4L4.894.553l-1.789.894L4.382 4zM14 8V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1zM3.095 10l.91 9.1A1 1 0 0 0 5 20h4l3.228-3.229.677-6.771h-9.81zM8 16a2 2 0 1 1 .001-4.001A2 2 0 0 1 8 16zM22 15.414L20.586 14 19 15.586V14h-2v3.586l-1 1V17h-2v3.586l-1.707 1.707 1.414 1.413L15.414 22H19v-2h-1.586l1-1H22v-2h-1.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
