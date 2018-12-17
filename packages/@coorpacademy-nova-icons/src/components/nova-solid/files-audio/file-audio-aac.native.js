import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11.25 15.507h1.5v1.5h-1.5zM6.002 15.507h1.499v1.5H6.002z" />
      <Path d="M16.414 1.007H5c-1.103 0-2 .897-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.593l-4.586-4.586zM9.001 20.006h-1.5v-1.5H6.002v1.5h-1.5v-5.25a.75.75 0 0 1 .75-.75h2.999a.75.75 0 0 1 .75.75v5.25zm5.248 0H12.75v-1.5h-1.5v1.5H9.751v-5.25a.75.75 0 0 1 .749-.75h3a.75.75 0 0 1 .749.75v5.25zm5.249-4.498h-2.249a.75.75 0 0 0-.75.749v1.5c0 .413.336.751.75.751h2.249v1.498h-2.249a2.252 2.252 0 0 1-2.25-2.249v-1.5a2.252 2.252 0 0 1 2.25-2.249h2.249v1.5zM15 7.007v-5l5 5h-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
