import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <Path
      d="M18 10.999c.334 0 .646-.167.832-.445l1.703-2.555H22v-2h-7v-2c0-1.654-1.346-3-3-3s-3 1.346-3 3v2H2v2h1.465l1.703 2.555a.999.999 0 0 0 .832.445h2v8H7a1 1 0 0 0-.949.684l-1 3A1 1 0 0 0 6 23.999h12a1 1 0 0 0 .949-1.316l-1-3a1 1 0 0 0-.949-.684h-1v-8h2zm-.536-2h-1.886l.875-1h1.678l-.667 1zm-6.464-5a1.001 1.001 0 0 1 2 0v2h-2v-2zm-4.465 5l-.667-1h7.928L10 12.338V9.999a1 1 0 0 0-1-1H6.535zm10.077 13H7.387l.333-1h8.559l.333 1zm-6.612-3v-3.624l4-4.572v8.196h-4z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
