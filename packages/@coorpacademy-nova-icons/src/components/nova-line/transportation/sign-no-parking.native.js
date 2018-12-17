import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.002H0z" />
    <G fill="currentColor">
      <Path d="M21.606 4.222l-1.414-1.414L2.707 20.293l1.414 1.414 1.103-1.102A.983.983 0 0 0 6 21h4a1 1 0 0 0 1-1v-3h1c3.86 0 7-3.14 7-7 0-.937-.188-1.83-.524-2.648l3.13-3.13zM9 19H7v-.172l2-2V19zm3-4h-1.172l2.19-2.19a2.997 2.997 0 0 0 1.792-1.792l2.073-2.073c.074.341.117.693.117 1.055 0 2.757-2.243 5-5 5zM7 13.171V5h5c.91 0 1.755.254 2.487.684l1.454-1.454A6.95 6.95 0 0 0 12 3H6a1 1 0 0 0-1 1v11.171l2-2z" />
      <Path d="M12 7h-2a1 1 0 0 0-1 1v3.171l2-2V9h.171l1.812-1.812A2.95 2.95 0 0 0 12 7z" />
    </G>
  </Svg>
);

export default SvgComponent;
