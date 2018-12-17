import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24.001v24.001H0z" />
    <G fill="currentColor">
      <Path d="M11 14V5c-4.971 0-9 4.029-9 9s4.029 9 9 9 9-4.029 9-9a8.947 8.947 0 0 0-.835-3.769L11 14zm-5.5 2a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 5.5 16zM8 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm2 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5.5-1a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 15.5 19z" />
      <Path d="M13 1v9l8.148-3.803C19.715 3.13 16.61 1 13 1zm3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
