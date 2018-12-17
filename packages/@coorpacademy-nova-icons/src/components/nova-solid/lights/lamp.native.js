import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M15 15h2v3h-2zM14 3h-1V2h-2v1h-1c-3.859 0-7 3.14-7 7v3a1 1 0 0 0 1.707.706L6 12.414l1.293 1.292a.999.999 0 0 0 1.414 0L10 12.414l1.293 1.292a.999.999 0 0 0 1.414 0L14 12.414l1.293 1.292a.999.999 0 0 0 1.414 0L18 12.414l1.293 1.292a.997.997 0 0 0 1.09.218c.373-.155.617-.52.617-.924v-3c0-3.86-3.141-7-7-7zM13 15h-2v5H9v2h6v-2h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
