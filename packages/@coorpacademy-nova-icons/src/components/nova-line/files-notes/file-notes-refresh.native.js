import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 9a5.009 5.009 0 0 0-4.899 4h2.083A2.996 2.996 0 0 1 12 11c.662 0 1.27.223 1.766.587L12 13h5V9l-1.646 1.318A4.964 4.964 0 0 0 12 9zM12 17c-.662 0-1.27-.223-1.766-.587L12 15H7v4l1.646-1.317A4.963 4.963 0 0 0 12 19a5.009 5.009 0 0 0 4.899-4h-2.083A2.996 2.996 0 0 1 12 17z" />
      <Path d="M19 2h-2V1a1 1 0 0 0-2 0v1h-2V1a1 1 0 0 0-2 0v1H9V1a1 1 0 0 0-2 0v1H5c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V4c0-1.104-.897-2-2-2zM5 22V4h2v1a1 1 0 1 0 2 0V4h2v1a1 1 0 1 0 2 0V4h2v1a1 1 0 1 0 2 0V4h2l.001 18H5z" />
    </G>
  </Svg>
);

export default SvgComponent;
