import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15 1.35v3.648h3.646A10.035 10.035 0 0 0 15 1.35zM15 15.684c.161-.243.343-.471.537-.686H15v.686zM20 9.998a9.95 9.95 0 0 0-.461-3H15v6h4.539a9.959 9.959 0 0 0 .461-3zM7 6.998h6v6H7zM7 .458v4.54h6V.458c-.947-.298-1.955-.46-3-.46S7.947.16 7 .458zM5 18.645v-3.647H1.354A10.047 10.047 0 0 0 5 18.645zM1.354 4.998H5V1.35a10.035 10.035 0 0 0-3.646 3.648zM7 19.536a9.981 9.981 0 0 0 6 0v-4.539H7v4.539zM0 9.998c0 1.044.162 2.052.461 3H5v-6H.461a9.94 9.94 0 0 0-.461 3zM22 15.998c-1.104 0-2 1-2 2 0-1-.896-2-2-2s-2 .894-2 2c0 3 4 6 4 6s4-3 4-6a2 2 0 0 0-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
