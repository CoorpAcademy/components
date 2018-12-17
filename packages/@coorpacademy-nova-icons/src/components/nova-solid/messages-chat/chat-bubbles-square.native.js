import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8.998 8c0-.55.45-1 1-1h9V3c0-.55-.45-1-1-1h-15c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h1v3l3-3h2V8z" />
      <Path d="M20.998 9h-9c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h5l3 3v-3h1c.55 0 1-.45 1-1v-7c0-.55-.45-1-1-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
