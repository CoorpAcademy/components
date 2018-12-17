import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M19.998 12.934L20 16s-4 2-8 2-8-2-8-2l.002-3.066C2.741 13.769 2 14.824 2 16c0 2.851 4.299 5 10 5s10-2.149 10-5c0-1.176-.741-2.231-2.002-3.066zM13 12.415l4.068-5.423c-1-1.089-2.371-1.749-4.068-1.934v7.357zM11 5.059c-1.697.184-3.068.844-4.068 1.933L11 12.415V5.059z" />
      <Path d="M5.684 14.949C5.812 14.992 8.873 16 12 16s6.188-1.008 6.316-1.051A1 1 0 0 0 19 14v-1c0-1.885-.353-3.471-1.021-4.722L12.6 15.45a.75.75 0 0 1-1.2 0L6.021 8.278C5.352 9.529 5 11.115 5 13v1a1 1 0 0 0 .684.949z" />
    </G>
  </Svg>
);

export default SvgComponent;
