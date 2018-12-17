import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6.851 11.527a1 1 0 0 0 .044-.973L6.072 8.91a4.962 4.962 0 0 0 4.463-1.371.997.997 0 0 0 0-1.414L8.414 4.002l1.293-1.293-1.414-1.414L7 2.588 4.879.467a.999.999 0 0 0-1.414 0A4.96 4.96 0 0 0 2 4.002c0 1.025.312 2 .881 2.824L.2 10.402a.997.997 0 0 0-.095 1.047c.17.338.516.553.895.553h5c.347 0 .668-.18.851-.475zM23 12.002h-6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1zm-1 2v6h-4v-6h4zM19 10.002h2v-6a1 1 0 0 0-1-1h-8v2h7v5zM5 14.002H3v6a1 1 0 0 0 1 1h10v-2H5v-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
