import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6.752 15.5h1.499V17H6.752z" />
      <Path d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM9.751 19.999h-1.5V18.5H6.752v1.499h-1.5V14.75a.75.75 0 0 1 .75-.75h2.999a.75.75 0 0 1 .75.75v5.249zm3.764.001h-1.542L10.5 14.002H12l.738 2.925.718-2.925h1.543L13.5 19.94l.015.06zm5.233-4.498h-.75v3h.75V20h-2.999v-1.498h.75v-3h-.75v-1.5h2.999v1.5zM15 7V2l5 5h-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
