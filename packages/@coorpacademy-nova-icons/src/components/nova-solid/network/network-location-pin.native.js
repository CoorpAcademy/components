import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 10.006a9.95 9.95 0 0 0-.461-3H15v6h4.539a9.95 9.95 0 0 0 .461-3zM7 .467v4.539h6V.467c-.947-.299-1.955-.461-3-.461S7.947.168 7 .467zM7 7.006h6v6H7zM15 1.359v3.647h3.646A10.04 10.04 0 0 0 15 1.359zM1.354 5.006H5V1.359a10.04 10.04 0 0 0-3.646 3.647zM7 19.545a9.98 9.98 0 0 0 6 0v-4.539H7v4.539zM5 18.652v-3.646H1.354A10.037 10.037 0 0 0 5 18.652zM0 10.006c0 1.045.162 2.052.461 3H5v-6H.461a9.95 9.95 0 0 0-.461 3zM20 14.006a4 4 0 0 0-4 4c0 3 4 6 4 6s4-3 4-6a4 4 0 0 0-4-4zm0 6a2 2 0 1 1 .001-4.001A2 2 0 0 1 20 20.006z" />
    </G>
  </Svg>
);

export default SvgComponent;
