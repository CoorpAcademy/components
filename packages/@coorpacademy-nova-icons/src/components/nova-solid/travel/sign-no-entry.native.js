import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M15.012 7.171V3h-2v6.171zM12.012 10.171V1h-2v10h-1V3h-2v12h-1v-4h-2v4c0 .936.2 1.821.534 2.637l7.466-7.466zM20.305 4.707L2.819 22.192l1.414 1.414 2.829-2.829A7 7 0 0 0 18.012 15V9.828l3.707-3.707-1.414-1.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
