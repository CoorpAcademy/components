import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 18a2.97 2.97 0 0 1-1.766-.587L12 16H7v4l1.646-1.317C9.536 19.493 10.706 20 12 20a5.009 5.009 0 0 0 4.899-4h-2.083A2.996 2.996 0 0 1 12 18zM12 10a5.009 5.009 0 0 0-4.899 4h2.083A2.996 2.996 0 0 1 12 12c.662 0 1.27.223 1.766.587L12 14h5v-4l-1.646 1.318A4.964 4.964 0 0 0 12 10z" />
      <Path d="M19 5h-2V3h-1.142c-.447-1.719-2-3-3.858-3S8.589 1.281 8.142 3H7v2H5c-1.103 0-2 .898-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V7c0-1.102-.897-2-2-2zm-7-3c.739 0 1.385.402 1.731 1h-3.463c.347-.598.993-1 1.732-1zM9 5h6v2H9V5zm10 16H5V7h2v2h10V7h2v14z" />
    </G>
  </Svg>
);

export default SvgComponent;
