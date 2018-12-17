import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4 16h4v4H4zM10 16h4v4h-4zM4 10h4v4H4z" />
      <Path d="M16 22H2V8h8.087A6.158 6.158 0 0 1 10 7V6H0v18h18v-9c-.481 0-1.196-.177-2-.511V22z" />
      <Path d="M12 0v7c0 3.575 5.053 5.699 5.629 5.929l.371.149.371-.149C18.947 12.699 24 10.575 24 7V0H12zm9 7h-2v2h-2V7h-2V5h2V3h2v2h2v2zM14 13.415c-1.256-.837-2.464-1.992-3.22-3.415H10v4h4v-.585z" />
    </G>
  </Svg>
);

export default SvgComponent;
