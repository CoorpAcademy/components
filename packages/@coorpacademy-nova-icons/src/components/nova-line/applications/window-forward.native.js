import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 6h18l-.001 5H22V2c0-1.103-.897-2-2-2H2C.897 0 0 .896 0 2v16c0 1.103.897 2 2 2h5v-2H2V6zm5-2V2h3v2H7zm13 0h-8V2h8v2zM5 2v2H2V2h3z" />
      <Path d="M18.707 12.292l-1.414 1.414L19.586 16H15c-3.309 0-6 2.691-6 6v2h2v-2c0-2.206 1.794-4 4-4h4.586l-2.293 2.293 1.414 1.414L23.414 17l-4.707-4.708z" />
    </G>
  </Svg>
);

export default SvgComponent;
