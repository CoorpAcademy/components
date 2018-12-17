import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6.751 15.507h1.5v1.5h-1.5z" />
      <Path d="M16.414 1.007H5c-1.103 0-2 .897-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.593l-4.586-4.586zM9.751 20.006h-1.5v-1.5h-1.5v1.5H5.252v-5.25a.75.75 0 0 1 .75-.75h2.999a.75.75 0 0 1 .75.75v5.25zm3.749-4.498h-.75v3h.75v1.498h-3v-1.498h.75v-3h-.75v-1.5h3v1.5zm5.248 0h-2.999v.749h2.249v1.5h-2.249v2.249h-1.5v-4.498c0-.827.673-1.5 1.5-1.5h2.999v1.5zM15 7.007v-5l5 5h-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
