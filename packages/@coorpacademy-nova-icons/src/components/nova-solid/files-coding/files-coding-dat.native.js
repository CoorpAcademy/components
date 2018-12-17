import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6.002 15.509v2.998a1.5 1.5 0 0 0 1.5-1.498c0-.827-.673-1.5-1.5-1.5zM11.25 15.507h1.5v1.5h-1.5z" />
      <Path d="M16.414 1.007H5c-1.103 0-2 .896-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.593l-4.586-4.586zm-10.412 19H4.503v-5.998h1.499a3.003 3.003 0 0 1 2.999 3 3.002 3.002 0 0 1-2.999 2.998zm8.247-.002H12.75v-1.5h-1.5v1.5H9.751v-5.248c0-.415.335-.75.75-.75h2.998c.415 0 .75.335.75.75v5.248zm5.248-4.496h-1.499v4.498h-1.5v-4.498h-1.499v-1.5h4.498v1.5zM15 7.007v-5l5 5h-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
