import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 4.002v-1a1 1 0 1 0-2 0v1l-4 13h10l-4-13zM14 19.502a.5.5 0 0 1-1 0v-1.5h-2v1.5c0 1.379 1.122 2.5 2.5 2.5s2.5-1.121 2.5-2.5v-.5h-2v.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
