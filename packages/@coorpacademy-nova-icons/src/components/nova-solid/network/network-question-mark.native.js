import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7 6.998h6v6H7zM15 1.35v3.648h3.646A10.035 10.035 0 0 0 15 1.35zM19.539 6.998H15v5.686a5.99 5.99 0 0 1 5-2.686 9.94 9.94 0 0 0-.461-3zM7 .458v4.54h6V.458c-.947-.298-1.955-.46-3-.46S7.947.16 7 .458zM5 18.645v-3.647H1.354A10.047 10.047 0 0 0 5 18.645zM7 19.536a9.981 9.981 0 0 0 6 0v-4.539H7v4.539zM0 9.998c0 1.044.162 2.052.461 3H5v-6H.461a9.94 9.94 0 0 0-.461 3zM1.354 4.998H5V1.35a10.035 10.035 0 0 0-3.646 3.648zM20 11.998c-2.206 0-4 1.793-4 4h2c0-1.103.897-2 2-2s2 .897 2 2c0 1.102-.897 2-2 2h-1v3h2V19.87a4.004 4.004 0 0 0 3-3.873 4.003 4.003 0 0 0-4-3.999z" />
      <Circle cx={20} cy={22.998} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
