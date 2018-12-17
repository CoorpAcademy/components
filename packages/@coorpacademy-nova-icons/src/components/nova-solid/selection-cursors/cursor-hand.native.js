import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      fill="currentColor"
      d="M19 7.002a1 1 0 0 0-1 1v4h-1v-8a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v7h-1v-8a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v8H9v-7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v8H5v-3a1 1 0 1 0-2 0v6c0 .227.077.447.219.625l4 5c.189.236.477.374.781.374h8a1 1 0 0 0 .8-.4l3-4a1 1 0 0 0 .2-.6v-8a1 1 0 0 0-1-.999z"
    />
  </Svg>
);

export default SvgComponent;
