import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M14 3h-1V2h-2v1h-1c-3.859 0-7 3.14-7 7v3a1 1 0 0 0 1.707.706L6 12.414l1.293 1.292a.999.999 0 0 0 1.414 0L10 12.414l1 1V20H8v2h8v-2h-3v-6.586l1-1 1.293 1.292a.999.999 0 0 0 1.414 0L18 12.414l1.293 1.292a.997.997 0 0 0 1.09.218c.373-.155.617-.52.617-.924v-3c0-3.86-3.141-7-7-7zm5 7.586l-.293-.293a.999.999 0 0 0-1.414 0L16 11.586l-1.293-1.293a.997.997 0 0 0-1.414 0L12 11.586l-1.293-1.293a.999.999 0 0 0-1.414 0L8 11.586l-1.293-1.293a.999.999 0 0 0-1.414 0L5 10.586V10c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v.586z" />
      <Path d="M15 15h2v3h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
