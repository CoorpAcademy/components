import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 13h4v4h-4z" />
      <Path d="M16.414 1H5c-1.103 0-2 .897-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.586L16.414 1zM17 13h-1v4h1v3h-3v-1h-4v1H7v-3h1v-4H7v-3h3v1h4v-1h3v3zm-2-6V2l5 5h-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
