import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 17V5a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1zm-2-7.414L15.415 6H19v3.586zM3 12.415L6.586 16H3v-3.585zM9.414 16L3 9.586V6h9.586L19 12.414V16H9.414z" />
      <Path d="M11 7.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5z" />
      <Path d="M22 8v11H5v2h18a1 1 0 0 0 1-1V8h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
