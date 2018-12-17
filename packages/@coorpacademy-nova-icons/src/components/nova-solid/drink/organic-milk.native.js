import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19.48 8l-2.879-3.601L13 8zM3.72 4L.52 8H11l4-4zM16 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2h12V1zM0 19a1 1 0 0 0 1 1h10V9H0v10zM20 9h-8v10l8-8zM24 15.414L22.586 14 21 15.586V14h-2v3.586l-1 1V17h-2v3.586l-1.707 1.707 1.414 1.413L17.414 22H21v-2h-1.586l1-1H24v-2h-1.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
