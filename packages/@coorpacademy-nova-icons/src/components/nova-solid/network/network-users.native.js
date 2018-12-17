import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7 .467v4.539h6V.467c-.947-.299-1.955-.461-3-.461S7.948.168 7 .467zM7 7.006h6v6H7zM19 11.006c.321 0 .633.037.938.095a9.95 9.95 0 0 0-.399-4.095H15v6h.023c.913-1.207 2.347-2 3.977-2zM15 1.359v3.647h3.647A10.042 10.042 0 0 0 15 1.359zM5 18.652v-3.646H1.354A10.045 10.045 0 0 0 5 18.652zM1.354 5.006H5V1.359a10.047 10.047 0 0 0-3.646 3.647zM7 19.545a9.98 9.98 0 0 0 6 0v-4.539H7v4.539zM0 10.006c0 1.045.163 2.052.461 3H5v-6H.461a9.98 9.98 0 0 0-.461 3z" />
      <Circle cx={19} cy={16.006} r={3} />
      <Path d="M19 19.006a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
