import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 15.509h-.75v1.5H12a.75.75 0 0 0 0-1.5zM6.002 15.507h1.5v1.5h-1.5zM17.248 15.509h-.75v1.5h.75a.75.75 0 0 0 0-1.5z" />
      <Path d="M16.414 1.007H5c-1.103 0-2 .896-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.593l-4.586-4.586zM9.001 20.005H7.502v-1.5h-1.5v1.5H4.503v-5.248c0-.415.335-.75.749-.75h2.999c.415 0 .75.335.75.75v5.248zM12 18.507h-.75v1.5H9.751v-5.998H12a2.252 2.252 0 0 1 2.249 2.25A2.251 2.251 0 0 1 12 18.507zm5.248 0h-.75v1.5h-1.499v-5.998h2.249a2.252 2.252 0 0 1 2.249 2.25 2.251 2.251 0 0 1-2.249 2.248zM15 7.007v-5l5 5h-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
