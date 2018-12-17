import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M15 10H9L7.308 21H6v2h4v-1a2 2 0 0 1 4 0v1h4v-2h-1.308L15 10zM8 7.238L1 4.613V6.75l4.152 1.557L1 9.863V12l7-2.625zM23 4.613l-7 2.625v2.137L23 12V9.863l-4.152-1.556L23 6.75zM15 5.415c0-.266-.106-.52-.293-.708l-2-2a1 1 0 0 0-1.414 0l-2 2A1.002 1.002 0 0 0 9 5.415V7h6V5.415z" />
    </G>
  </Svg>
);

export default SvgComponent;
