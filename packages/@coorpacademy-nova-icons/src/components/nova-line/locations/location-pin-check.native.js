import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M15.293 7.293L11 11.586 8.707 9.293l-1.414 1.414 3 3a.997.997 0 0 0 1.414 0l5-5-1.414-1.414z" />
      <Path d="M12 2c-4.411 0-8 3.589-8 8s4.644 9.44 8 12.318c3.354-2.876 8-7.906 8-12.318 0-4.411-3.589-8-8-8zm0 17.654C9.87 17.657 6 13.338 6 10c0-3.309 2.691-6 6-6s6 2.691 6 6c0 3.338-3.87 7.657-6 9.654z" />
    </G>
  </Svg>
);

export default SvgComponent;
