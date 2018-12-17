import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M20.293 4.707L2.807 22.192l1.414 1.414 2.831-2.831A6.954 6.954 0 0 0 11 22c3.86 0 7-3.141 7-7V9.828l3.707-3.707-1.414-1.414zM16 15c0 2.757-2.244 5-5 5a4.95 4.95 0 0 1-2.491-.681L14.828 13H16v2zM15 7.171V3h-2v6.171zM12 10.171V1h-2v10H9V3H7v12H6v-3H4v3c0 .936.2 1.819.535 2.636L12 10.171z" />
    </G>
  </Svg>
);

export default SvgComponent;
