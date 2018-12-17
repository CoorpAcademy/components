import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 9V7h-3.42L12.868.503l-1.736.993L14.277 7H5.724l3.144-5.504L7.132.503 3.42 7H0v2zM18.58 10H1.421l1.604 7.217A.997.997 0 0 0 4 18h10.349a6.013 6.013 0 0 1 3.229-3.485L18.58 10zM23.707 17.706l-1.414-1.413L20 18.586l-2.293-2.293-1.414 1.413L18.586 20l-2.293 2.293 1.414 1.413L20 21.414l2.293 2.292 1.414-1.413L21.414 20z" />
    </G>
  </Svg>
);

export default SvgComponent;
