import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 9.002c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm-3 5c0-1.276.804-2.36 1.929-2.793l-.346 3.269-1.372.61A2.974 2.974 0 0 1 9 14.002zm3 3a2.97 2.97 0 0 1-1.876-.678l2.997-1.333 1.208.879A2.984 2.984 0 0 1 12 17.002zm2.953-2.533l-2.656-1.932.158-1.489A2.996 2.996 0 0 1 15 14.002c0 .16-.023.314-.047.467z" />
      <Path d="M16.414 1.001H5c-1.103 0-2 .897-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.587l-4.586-4.586zM5 21.001v-18h10v4h4l.001 14H5z" />
    </G>
  </Svg>
);

export default SvgComponent;
