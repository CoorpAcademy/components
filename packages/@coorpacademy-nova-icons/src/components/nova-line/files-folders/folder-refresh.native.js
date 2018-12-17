import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 7h-8.25L10.1 4.8A2.009 2.009 0 0 0 8.5 4H4c-1.103 0-2 .898-2 2v13c0 1.103.897 2 2 2h2v-2H4V6h4.5l1.65 2.2c.375.501.974.8 1.6.8H20v10h-3v2h3c1.103 0 2-.897 2-2V9c0-1.102-.897-2-2-2z" />
      <Path d="M12 18c-.662 0-1.27-.223-1.766-.587L12 16H7v4l1.646-1.317C9.536 19.493 10.706 20 12 20a5.009 5.009 0 0 0 4.899-4h-2.083A2.996 2.996 0 0 1 12 18zM17 10l-1.646 1.318A4.964 4.964 0 0 0 12 10a5.009 5.009 0 0 0-4.899 4h2.083A2.996 2.996 0 0 1 12 12c.662 0 1.27.223 1.766.587L12 14h5v-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
