import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6 15.5v3a1.501 1.501 0 0 0 0-3zM11.75 15.5a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-.75-.75z" />
      <Path d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM6 20H4.5v-6H6c1.655 0 3 1.345 3 3s-1.345 3-3 3zm8-2.25c0 1.241-1.009 2.25-2.25 2.25S9.5 18.991 9.5 17.75v-1.5c0-1.241 1.009-2.25 2.25-2.25S14 15.009 14 16.25v1.5zm5.5-2.25h-2.25a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h2.25V20h-2.25A2.252 2.252 0 0 1 15 17.75v-1.5A2.252 2.252 0 0 1 17.25 14h2.25v1.5zM15 7V2l5 5h-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
