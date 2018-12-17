import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      d="M19.316 8.053L17 7.281v-4.28a1 1 0 0 0-1-1h-2a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1H7a1 1 0 0 0-1 1v5H4a1 1 0 0 0-1 1v5c0 .197.059.391.168.555l4 6c.186.278.498.445.832.445h8a1 1 0 0 0 .857-.485l3-5a.992.992 0 0 0 .143-.515v-6a.999.999 0 0 0-.684-.948zM18 14.725l-2.566 4.277H8.535L5 13.699v-3.697h1v3h2v-9h1v8h2v-9h1v9h2v-8h1v9h2V9.389l1 .333v5.003z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
