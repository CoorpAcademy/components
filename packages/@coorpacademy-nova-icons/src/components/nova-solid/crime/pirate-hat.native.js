import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M5 19h14v2H5zM21.851 12.475A1.001 1.001 0 0 0 21 12h-2c-.551 0-1-.448-1-1 0-3.309-2.691-6-6-6s-6 2.691-6 6c0 .552-.449 1-1 1H3a1.001 1.001 0 0 0-.895 1.448l2 4c.17.338.516.552.895.552h14c.379 0 .725-.214.895-.553l2-4c.154-.31.138-.678-.044-.972zm-6.144 1.818l-1.414 1.413L12 13.414l-2.293 2.292-1.414-1.413L10.586 12 8.293 9.707l1.414-1.413L12 10.586l2.293-2.293 1.414 1.413L13.414 12l2.293 2.293z" />
    </G>
  </Svg>
);

export default SvgComponent;
