import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 22h18v2H3zM5.001 21h14V8h1V6h-1v-.414l-.293-.293c-4.37-4.37-9.044-4.37-13.414 0l-.293.293V6h-1v2h1v13zM13 8h4v2h-4V8zm0 4h4v2h-4v-2zm0 4h4v2h-4v-2zM7.001 8h4v2h-4V8zm0 4h4v2h-4v-2zm0 4h4v2h-4v-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
