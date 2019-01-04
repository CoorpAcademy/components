import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G>
      <Path d="M9 23h2v1h2v-1h2v-2H9zM12 5c-3.859 0-7 3.14-7 7a7.011 7.011 0 0 0 4 6.319V19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-.681A7.01 7.01 0 0 0 19 12c0-3.86-3.141-7-7-7zm1.666 11.709a1.001 1.001 0 0 0-.666.942V18h-2v-.349a1 1 0 0 0-.666-.942A5.008 5.008 0 0 1 7 12c0-2.757 2.243-5 5-5s5 2.243 5 5c0 2.11-1.34 4.003-3.334 4.709zM11 0h2v4h-2zM0 11h4v2H0zM20 11h4v2h-4zM20.292 2.292l1.414 1.414-3 3-1.414-1.413zM3.707 2.293l3 3-1.413 1.414-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
